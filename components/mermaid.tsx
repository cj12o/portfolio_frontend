"use client";

import { useEffect, useRef } from "react";
import mermaid from "mermaid";

export default function Mermaid({ chart }: { chart: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: false,
      securityLevel: "loose",
      theme: "default",
    });

    if (ref.current) {
      mermaid.render(
        "mermaid-" + Math.random().toString(36),
        chart
      ).then(({ svg }) => {
        ref.current!.innerHTML = svg;
      });
    }
  }, [chart]);

  return <div ref={ref} />;
}
