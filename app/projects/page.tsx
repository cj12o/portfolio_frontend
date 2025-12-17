"use client";
import React, { useEffect, useState } from "react";
import { ChevronRight, FileCode, X ,SidebarCloseIcon,SidebarOpenIcon,FolderOpen,FolderClosed} from "lucide-react";
import { projectsData, filetree } from "@/data/project-data";
import { motion } from "framer-motion";

import Challenges from "@/components/projectpage/challenges";
import Intro from "@/components/projectpage/introduction";
import { cn } from "@/lib/utils";
import { useParams, useSearchParams } from "next/navigation";
import Container from "@/components/container";
import ProjectsExplorer from "@/components/projectExplorer";
const ProjectsPage = () => {
  
  return (
    <div className="flex flex-col min-h-screen dark:bg-bgdark">
    <ProjectsExplorer/>
    </div>
  );
};

export default ProjectsPage;
