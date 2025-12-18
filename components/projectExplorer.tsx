"use client";
import React, { useEffect, useState } from "react";
import { ChevronRight, FileCode, X ,SidebarCloseIcon,SidebarOpenIcon,FolderOpen,FolderClosed} from "lucide-react";
import { projectsData, filetree } from "@/data/project-data";
import { motion } from "framer-motion";

import Challenges from "@/components/projectpage/challenges";
import Intro from "@/components/projectpage/introduction";
import { cn } from "@/lib/utils";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { useTheme } from "next-themes";
import Details from "@/components/projectpage/details"

type Tabtyp = {
  project_id: string;
  file_name: string;
  openedCurrently: boolean;
  tab_id?: string;
  path_to_display: string;
};


const ProjectsExplorer = () => {

  const {theme}=useTheme()
  let img_src="/assets/wallpaper_dark_3.jpg"
  let sidebar_bg="bg-white/60"
  if(theme=="dark"){
    img_src="/assets/wallpaper_dark_2.jpg"
    sidebar_bg="bg-white/25"
  }

  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);
  const [projectIdOpen, setProjectIdOpen] = useState<string>("-1");

  const [introSelected, setIntroSelected] = useState<boolean>(false);
  const [challengeSelected, setChallengeSelected] = useState<boolean>(false);
  const [detailsSelected,setDetailsSelected]=useState<boolean>(false);

  const [openTabs, setOpenTabs] = useState<Tabtyp[]>([]);

  const [fileSelected,setFileSelected]=useState<string>("")

  const searchParams = useSearchParams()
  const id = searchParams.get("id")||"-1";
  const project_name =searchParams.get("project_name")||"";

  useEffect(()=>{
    if(id!="-1" && project_name.length>0){
      setProjectIdOpen(id)
      setIntroSelected(true)
      setFileSelected(filetree[0])
      tabHandler(filetree[0],id,project_name)
    }
  },[id,searchParams])

  const setTabInFocus = (tab_id: string) => {
    const tab = openTabs.find((tab) => tab.tab_id == tab_id);
    if (tab && tab.file_name) {
      setOpenTabs((prev) =>
        prev.map((t) => ({
          ...t,
          openedCurrently: t.tab_id === tab_id,
        }))
      );

      if (tab.file_name === "Intro.md") {
        setIntroSelected(true);
        setChallengeSelected(false);
        setDetailsSelected(false)
      } 
      else if (tab.file_name === "Challenges.tsx") {
        setChallengeSelected(true);
        setIntroSelected(false);
        setDetailsSelected(false)
      }
      else if(tab.file_name === "Details.md"){
        setIntroSelected(false);
        setChallengeSelected(false);
        setDetailsSelected(true)
      }
      // Ensure the project ID is set so the content renders
      setProjectIdOpen(tab.project_id);
    }
  };

  const tabCloser = (tab_id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const tabToClose = openTabs.find((t) => t.tab_id === tab_id);
    const remainingTabs = openTabs.filter((tab) => tab.tab_id != tab_id);
    setOpenTabs(remainingTabs);

    // If closing the active tab, switch to the last one or clear selection
    if (tabToClose?.openedCurrently) {
      if (remainingTabs.length > 0) {
        const lastTab = remainingTabs[remainingTabs.length - 1];
        setTabInFocus(lastTab.tab_id!);
      } else {
        setIntroSelected(false);
        setChallengeSelected(false);
        setDetailsSelected(false);
      }
    }
  };

  const tabHandler = (
    file_name: string,
    project_id: string,
    project_name: string
  ) => {
    const tab_id = file_name + project_id;

    // Update tabs list
    setOpenTabs((prev) => {
      const exists = prev.some((tab) => tab.tab_id === tab_id);
      if (exists) {
        // Just focus it
        return prev.map((t) => ({
          ...t,
          openedCurrently: t.tab_id === tab_id,
        }));
      }
      // Add new and focus
      const newTab = {
        file_name: file_name,
        project_id: project_id,
        openedCurrently: true,
        tab_id: tab_id,
        path_to_display: `${project_name.slice(0,5)} / ${file_name}`,
      };
      return [...prev.map((t) => ({ ...t, openedCurrently: false })), newTab];
    });

    // Set View State
    if (file_name == "Intro.md") {
      setIntroSelected(true);
      setChallengeSelected(false);
      setDetailsSelected(false)
    } 
    else if (file_name == "Challenges.tsx") {
      setChallengeSelected(true);
      setIntroSelected(false);
      setDetailsSelected(false);
    }
    else if(file_name == "Details.md"){
      setChallengeSelected(false);
      setIntroSelected(false);
      setDetailsSelected(true);
    }
  };

  return (
    <div className="py-10 max-w-7xl mx-auto w-full px-4 mt-12  w-full h-full">
      <div className="relative w-full rounded-lg overflow-hidden flex flex-col h-[80vh] shadow-sm rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] dark:bg-black/30 overflow-hidden">
        <Image
        src={img_src}
        fill
        className="object-cover"
        alt="wallpaper"
        ></Image>
        <div className="absolute h-full w-full bg-white/25 backdrop-brightness-70 backdrop-blur-[0.8px]">
          <div className="w-full bg-background border border-border rounded-lg overflow-hidden flex flex-col h-[80vh] shadow-sm
          border border-white/60
          rounded-2xl
          shadow-[0_8px_30px_rgba(0,0,0,0.12)]
          dark:bg-black/30">
          {/* Window Header / Tabs */}
          <div className="flex h-10 bg-muted/30 border-b border-gray-300">
            {/* Sidebar Toggle */}
            <div
              className={`${
                sidebarOpen ? "w-64" : "w-12"
              } flex-shrink-0 border-r border-gray-300 flex items-center px-4 transition-all duration-300 ease-in-out`}
            >
              <h3
                className={`text-xs font-semibold text-muted-foreground uppercase tracking-wider ${
                  !sidebarOpen && "hidden"
                }`}
              >
                Explorer
              </h3>
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className={`ml-auto text-muted-foreground hover:text-foreground ${
                  !sidebarOpen && "mx-auto"
                }`}
              >
                {/* Simple icon for sidebar toggle */}
                {sidebarOpen ?<SidebarCloseIcon size={20} />:<SidebarOpenIcon size={20} />}
              </button>
            </div>

            {/* Tabs List */}
            <div className="flex-1 flex overflow-x-auto scrollbar-hide items-end">
              {openTabs.map((tab) => (
                <div
                  key={tab.tab_id}
                  onClick={() =>{
                    setTabInFocus(String(tab.tab_id))
                    setFileSelected(tab.file_name)
                  }}
                  className={`
                    group flex items-center max-w-[200px] h-full px-3 py-1  border-gray-300 cursor-pointer select-none text-xs md:text-sm font-medium
                    ${
                      tab.openedCurrently
                        ? "bg-background text-primary bg-gray-100 border-t-2 border-t-primary"
                        : `bg-muted/10 text-muted-foreground hover:bg-muted/20 ${sidebar_bg}`
                    }
                  `}
                >
                  <span className="mr-2">
                    {tab.file_name.endsWith(".tsx") ? (
                      <span className="text-blue-500">TS</span>
                    ) : (
                      <span className="text-yellow-500">MD</span>
                    )}
                  </span>
                  <span className="truncate">{tab.path_to_display}</span>
                  <span
                    onClick={(e) => tabCloser(String(tab.tab_id), e)}
                  >
                    <X size={12} />
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Main Body */}
          <div className="flex flex-1 overflow-hidden font-sans">
            {/* Sidebar */}
            <motion.div
              initial={false}
              animate={{ width: sidebarOpen ? "16rem" : "3rem" }}
              className={`bg-muted/10 border-r border-gray-300 overflow-y-auto flex-shrink-0 ${sidebar_bg}`}
            >
              <div className="py-2">
                {projectsData.map((prj) => (
                  <div key={prj.id}>
                    <div
                      className={`
                        flex items-center px-4 py-1.5 cursor-pointer 
                        ${
                          projectIdOpen === prj.id
                            ? "bg-accent/50 text-accent-foreground"
                            : "text-muted-foreground hover:text-foreground hover:bg-accent/30"
                        }
                        ${
                          !sidebarOpen &&
                          "justify-center px-0"
                        }
                      `}
                      onClick={() =>{
                        setProjectIdOpen(projectIdOpen === prj.id ? "-1" : prj.id)
                        setFileSelected("")
                      }}
                      title={prj.title}
                    >
                      {sidebarOpen ? (
                        <>
                          <ChevronRight
                            className={`w-3 h-3 mr-2 transition-transform ${
                              projectIdOpen === prj.id ? "rotate-90" : ""
                            }`}
                          />
                          {
                            projectIdOpen === prj.id?(
                              <FolderOpen className=" fill-blue-500/20" size={23}/>
                            ):(
                              <FolderClosed className="text-blue-500 " size={23}/>
                            )
                          }
                          <span className="ml-3 text-sm truncate font-medium">
                            {prj.title}
                          </span>
                        </>
                      ) : (
                        <FolderClosed className="text-blue-500 " size={33}/> 
                      )}
                    </div>

                    {/* Sub-files */}
                    {projectIdOpen === prj.id && sidebarOpen && (
                      <div className="ml-5 border-l border-gray-300 pl-1 mt-1 mb-2">
                        {filetree.map((fl) => (
                          <div
                            key={fl}
                            className={cn("flex items-center px-4 py-1 text-sm text-muted-foreground hover:text-foreground cursor-pointer hover:bg-accent/30  rounded-r-sm",fileSelected === fl ? "bg-neutral-100 rounded-xl dark:text-black" : "")}                          
                            onClick={() =>{
                              tabHandler(fl, prj.id, prj.title)
                              setFileSelected(fl)
                            }}
                          >
                            {fl.endsWith(".tsx") ? (
                              <FileCode className="w-3.5 h-3.5 mr-2 text-blue-400" />
                            ) : (
                              <FileCode className="w-3.5 h-3.5 mr-2 text-yellow-500" />
                            )}
                            {fl}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Content Area */}
            <div className={cn("flex-1 bg-background relative overflow-y-auto w-full h-full",( introSelected || challengeSelected? "bg-white/25" : ""))}>
              <div className="min-h-full">
                {openTabs.length > 0 && (introSelected || challengeSelected || detailsSelected) ? (
                  <>
                    {introSelected && projectIdOpen !== "-1" && (
                      <Intro project_id={projectIdOpen} />
                    
                    )}
                    {challengeSelected && projectIdOpen !== "-1" && (
                      <Challenges project_id={projectIdOpen} />
                    )}
                    {detailsSelected && projectIdOpen !== "-1" && (
                      <Details project_id={projectIdOpen} />
                    )}
                    

                  </>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center text-muted-foreground opacity-40 select-none">
                    <div className="w-24 h-24 bg-muted mb-4 rounded-xl flex items-center justify-center">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        className="w-12 h-12"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1"
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        />
                      </svg>
                    </div>
                    <p className="text-black dark:text-white font-medium ">Select a file to view content</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsExplorer;


