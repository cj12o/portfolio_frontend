
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
} from "react-icons/si";
import { cn } from "@/lib/utils";
import Image  from "next/image";

export const getTechIcon = ({techname,sz,className}:{techname:string, sz?: number,className?:string}) => {
  const size = sz || 16;
  const tech = techname.toLowerCase();
  switch (tech) {
    case "bitmesra":
      return <Image src={"/assets/bitMesra.png"} alt={"bitmesra"} height={size} width={size} className={cn("text-black rounded-full",className?className:"")}/>
    case "microsoft":
      return <Image src={"/assets/microsoft.png"} alt={"Microsoft"} height={size} width={size} className={cn("text-black",className?className:"")}/>
    case "sreamlit":
      return <SiStreamlit size={size} className={cn("text-black",className?className:"")}/>;
    case "fastapi":
      return <SiFastapi size={size} className={cn("text-black",className?className:"")}/>;
    case "django":
      return <SiDjango size={size} className={cn("text-black",className?className:"")}/>;
    case "react":
      return <SiReact size={size} className={cn("text-black",className?className:"")}/>;
    case "postgresql":
      return <SiPostgresql size={size} className={cn("text-black",className?className:"")}/>;
    case "mongodb":
      return <SiMongodb size={size} className={cn("text-black",className?className:"")}/>
      case "tailwindcss":
      return <SiTailwindcss size={size} className={cn("text-black",className?className:"")} />;
    case "docker":
      return <SiDocker size={size} className={cn("text-black",className?className:"")}/>;
    case "celery":
      return <SiCelery size={size} className={cn("text-black",className?className:"")} />;
    case "djangochannels":
    case "django channels":
      return <SiDjango size={size} className={cn("text-black",className?className:"")} />; // Reusing Django icon for channels
    case "langchain":
      return <SiLangchain size={size} className={cn("text-black",className?className:"")}  />; // Fallback icon for Langchain if package not imported
    case "langgraph":
      return  <Image
      src="/assets/langgraph.png" width={size} height={size}alt="langraph" className={`text-black ${className}`?className:""}/>
    case "streamlit":
      return <SiStreamlit size={size} className={cn("text-black",className?className:"")} />;
    default:
      return null;
  }
};
