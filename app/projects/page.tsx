"use client";
import { Suspense } from "react";
import ProjectsExplorer from "@/components/projectExplorer";
const ProjectsPage = () => {
  
  return (
    <div className="flex flex-col min-h-screen dark:bg-bgdark">
    <Suspense fallback={<div className="p-6">Loading projects…</div>}>
      <ProjectsExplorer/>
    </Suspense>
    </div>
  );
};

export default ProjectsPage;
