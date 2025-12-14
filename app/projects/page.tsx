"use client";
import React, { useState } from "react";
import { ChevronRight, Folder, FileCode, X } from "lucide-react";
import { projectsData, filetree } from "@/data/project-data";
import { motion } from "framer-motion";

import Challenges from "@/components/projectpage/challenges";
import Intro from "@/components/projectpage/introduction";

type Tabtyp = {
  project_id: string;
  file_name: string;
  openedCurrently: boolean;
  tab_id?: string;
  path_to_display: string;
};

const ProjectsPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);
  const [projectIdOpen, setProjectIdOpen] = useState<string>("-1");

  const [introSelected, setIntroSelected] = useState<boolean>(false);
  const [challengeSelected, setChallengeSelected] = useState<boolean>(false);

  const [openTabs, setOpenTabs] = useState<Tabtyp[]>([]);

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
      } else if (tab.file_name === "Challenges.tsx") {
        setChallengeSelected(true);
        setIntroSelected(false);
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
        path_to_display: `${project_name}/${file_name}`,
      };
      return [...prev.map((t) => ({ ...t, openedCurrently: false })), newTab];
    });

    // Set View State
    if (file_name == "Intro.md") {
      setIntroSelected(true);
      setChallengeSelected(false);
    } else if (file_name == "Challenges.tsx") {
      setChallengeSelected(true);
      setIntroSelected(false);
    } else {
      setChallengeSelected(false);
      setIntroSelected(false);
    }
  };

  return (
    <div className="py-10 max-w-7xl mx-auto w-full px-4">
      <div className="w-full bg-background border border-border rounded-lg overflow-hidden flex flex-col h-[80vh] shadow-sm">
        {/* Window Header / Tabs */}
        <div className="flex h-10 bg-muted/30 border-b border-border">
          {/* Sidebar Toggle */}
          <div
            className={`${
              sidebarOpen ? "w-64" : "w-12"
            } flex-shrink-0 border-r border-border flex items-center px-4 transition-all duration-300 ease-in-out`}
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
              <svg
                width="16"
                height="16"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
              >
                <path
                  d="M1.5 3C1.22386 3 1 3.22386 1 3.5V11.5C1 11.7761 1.22386 12 1.5 12H13.5C13.7761 12 14 11.7761 14 11.5V3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM2 4H4V11H2V4ZM5 11V4H13V11H5Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          {/* Tabs List */}
          <div className="flex-1 flex overflow-x-auto scrollbar-hide items-end">
            {openTabs.map((tab) => (
              <div
                key={tab.tab_id}
                onClick={() => setTabInFocus(String(tab.tab_id))}
                className={`
                                    group flex items-center max-w-[200px] h-full px-3 py-1 border-r border-border cursor-pointer select-none text-xs md:text-sm font-medium
                                    ${
                                      tab.openedCurrently
                                        ? "bg-background text-primary border-t-2 border-t-primary"
                                        : "bg-muted/10 text-muted-foreground hover:bg-muted/20"
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
                  className="ml-2 p-0.5 rounded-full hover:bg-muted/50 opacity-0 group-hover:opacity-100 transition-opacity"
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
            className="bg-muted/10 border-r border-border overflow-y-auto flex-shrink-0"
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
                    onClick={() =>
                      setProjectIdOpen(projectIdOpen === prj.id ? "-1" : prj.id)
                    }
                    title={prj.title}
                  >
                    {sidebarOpen ? (
                      <>
                        <ChevronRight
                          className={`w-3 h-3 mr-2 transition-transform ${
                            projectIdOpen === prj.id ? "rotate-90" : ""
                          }`}
                        />
                        <Folder
                          className={`w-4 h-4 mr-2 ${
                            projectIdOpen === prj.id
                              ? "text-blue-500 fill-blue-500/20"
                              : ""
                          }`}
                        />
                        <span className="text-sm truncate font-medium">
                          {prj.title}
                        </span>
                      </>
                    ) : (
                      <Folder
                        className={`w-5 h-5 ${
                          projectIdOpen === prj.id
                            ? "text-blue-500 fill-blue-500/20"
                            : ""
                        }`}
                      />
                    )}
                  </div>

                  {/* Sub-files */}
                  {projectIdOpen === prj.id && sidebarOpen && (
                    <div className="ml-5 border-l border-border/50 pl-1 mt-1 mb-2">
                      {filetree.map((fl) => (
                        <div
                          key={fl}
                          className="flex items-center px-4 py-1 text-sm text-muted-foreground hover:text-foreground cursor-pointer hover:bg-accent/30 rounded-r-sm"
                          onClick={() => tabHandler(fl, prj.id, prj.title)}
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
          <div className="flex-1 bg-background relative overflow-y-auto">
            <div className="p-8 pb-20 min-h-full">
              {openTabs.length > 0 && (introSelected || challengeSelected) ? (
                <>
                  {introSelected && projectIdOpen !== "-1" && (
                    <>
                    <Intro project_id={projectIdOpen} />
                    <div className="w-1/2 rounded-lg border border-border bg-black overflow-hidden aspect-video relative shadow-sm">
                        <video
                        src={projectsData[Number(projectIdOpen)-1].videoUrl}  
                        controls
                        muted={true}
                        autoPlay={true}
                        preload="auto"
                        className="w-full h-full object-contain"
                        />
                    </div>
                    </>
                  )}
                  {challengeSelected && projectIdOpen !== "-1" && (
                    <Challenges project_id={projectIdOpen} />
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
                  <p>Select a file to view content</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
