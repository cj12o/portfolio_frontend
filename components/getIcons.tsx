
import {
  SiDocker,
  SiFastapi,
  SiDjango,
  SiReact,
  SiPostgresql,
  SiTailwindcss,
  SiCelery,
  SiLangchain,
  SiStreamlit,
  SiMongodb,
  SiRedis,
  SiAmazonwebservices,
  SiOllama,
} from "react-icons/si";
import { cn } from "@/lib/utils";
import Image from "next/image";

export const getTechIcon = ({ techname, sz, className }: { techname: string; sz?: number; className?: string }) => {
  const size = sz || 16;
  const tech = techname.toLowerCase().replace(/\s/g, "");
  const cls = className || "";

  switch (tech) {
    case "bitmesra":
      return <Image src={"/assets/bitMesra.png"} alt={"bitmesra"} height={size} width={size} className={cn("rounded-full", cls)} />;
    case "microsoft":
      return <Image src={"/assets/microsoft.png"} alt={"Microsoft"} height={size} width={size} className={cls} />;
    case "fastapi":
      return <SiFastapi size={size} className={cls} />;
    case "django":
    case "djangorestframework":
    case "djangochannels":
      return <SiDjango size={size} className={cls} />;
    case "react":
      return <SiReact size={size} className={cls} />;
    case "postgresql":
      return <SiPostgresql size={size} className={cls} />;
    case "mongodb":
      return <SiMongodb size={size} className={cls} />;
    case "tailwindcss":
      return <SiTailwindcss size={size} className={cls} />;
    case "docker":
      return <SiDocker size={size} className={cls} />;
    case "celery":
      return <SiCelery size={size} className={cls} />;
    case "langchain":
      return <SiLangchain size={size} className={cls} />;
    case "langgraph":
      return <Image src="/assets/langgraph.png" width={size} height={size} alt="langgraph" className={cls} />;
    case "streamlit":
      return <SiStreamlit size={size} className={cls} />;
    case "redis":
      return <SiRedis size={size} className={cls} />;
    case "aws":
    case "amazonwebservices":
      return <SiAmazonwebservices size={size} className={cls} />;
    case "ollama":
      return <SiOllama size={size} className={cls} />;
    default:
      return null;
  }
};
