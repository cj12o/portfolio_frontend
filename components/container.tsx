import React from "react";
import { cn } from "@/lib/utils";
const container = ({
  children,
  classname = "",
}: {
  children: React.ReactNode;
  classname?: string;
}) => {
  return (
    <div
      className={cn(
        "relative mx-auto w-full max-w-4xl bg-white dark:bg-black/50 md:p-10 border-x border-neutral-200 dark:border-neutral-800 shadow-sm",
        classname
      )}
    >
      {children}
    </div>
  );
};

export default container;
