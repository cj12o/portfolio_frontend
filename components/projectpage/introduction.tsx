"use client";
import React from "react";
import { projectsData } from "@/data/project-data";

const introduction = ({ project_id }: { project_id: string }) => {
  const prj = projectsData[Number(project_id)];
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-foreground mb-2">
          {prj.title}
        </h1>
        <p className="text-muted-foreground leading-relaxed">
          {prj.description}
        </p>
      </div>
    </div>
  );
};

export default introduction;
