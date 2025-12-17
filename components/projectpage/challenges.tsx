import React from "react";
import { projectsData } from "@/data/project-data";

const Challenges = ({ project_id }: { project_id: string }) => {
  const prj = projectsData[Number(project_id) - 1];

  if (!prj) return null;

  return (
    <section className="max-w-4xl mx-auto px-2 py-2">
      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-6 border-gray-300 border-dotted border-b-2">
        {prj.title} -
        <span className=" ml-3 text-lg font-medium text-muted-foreground mt-1">
          Key Challenges & Solutions
        </span>
      </h1>

      {/* Challenges */}
      <div className="space-y-2">
        {prj.challenges.map((chl, idx) => (
          <div
            key={idx}
            className="bg-background m-2 p-3"
          >
            <h3 className="text-md font-semibold mb-2">
              # {chl.problem}
            </h3>

            <p className="text-secondary text-sm leading-relaxed text-muted-foreground mb-2">
              <span className="font-bold">Solution: </span>
              {chl.solution}
            </p>
            {chl.technicalchallenge && <p className="text-secondary text-sm leading-relaxed text-muted-foreground mb-2">
              <span className="font-bold">Technical Challenge: </span>
              {chl.technicalchallenge}
            </p>
            }
            {chl.chlsolution && <p className="text-secondary text-sm leading-relaxed text-muted-foreground mb-2">
              <span className="font-bold">Solution: </span>
              {chl.chlsolution}
            </p>
            }
            <p className="text-secondary text-sm leading-relaxed text-muted-foreground mb-2">
              <span className="font-bold">Achieved: </span>
              {chl.achieved}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Challenges;

