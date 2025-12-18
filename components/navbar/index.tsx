"use client";
import Container from "@/components/container";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";

import { NAV_ITEMS } from "@/data";
import { redirect } from "next/navigation";
import {useTheme} from "next-themes";
import { SunIcon,MoonIcon } from "lucide-react";
import { cn } from "@/lib/utils";


const index = () => {
  
  const{theme,setTheme}=useTheme();

  const items = NAV_ITEMS;

  const [on,setOn]=useState<string>("Home")

  const [hover, setHover] = useState<string>("");
  const { scrollY } = useScroll();

  const [scrolled, setScrolled] = useState<boolean>(false);

  

  const y=useTransform(scrollY,[0,100],[0,10]);
  const width=useTransform(scrollY,[0,100],["100%","60%"])
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });
  return (
    <div className="dark:bg-bgdark bg-red-500">
      <motion.nav
        className={cn("fixed top-0 inset-x-0 z-50 flex max-w-4xl mx-auto items-center justify-between py-3 px-4 rounded-l-full rounded-r-full",scrolled?"dark:bg-black/25 backdrop-blur-md  ":"")}
        style={{
          boxShadow: scrolled ? theme == "dark" ? "var(--shadow-s2)" : "var(--shadow-s1)" : "none",
          width:width,
          y:y,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
      >
        <Image
          className="h-10 w-10 rounded-full"
          src="/neymar.jpg"
          height={100}
          width={100}
          alt="avatar"
          onClick={()=>{
            setHover("")
            setOn("Home")
            redirect("/")
           
          }}
        />
        <div className="flex items-center gap-3">
           
          {items.map((item, idx) => {
            return (
              <Link
                className="relative text-sm px-2 py-1"
                onMouseEnter={() => setHover(item.name)}
                onMouseLeave={() => setHover("")}
                href={item.href}
                key={idx}
                onClick={()=>setOn(item.name)}
              >
                {hover == item.name ? (
                  <motion.span
                    layoutId="hovered-span"
                    className="h-full w-full inset-0 z-10 absolute inset-0 rounded-md dark:bg-neutral-300 bg-neutral-300 "
                  />
                ) : null}
                {
                  hover==item.name && on!=item.name ?<span className={"relative z-10 text-black dark:text-black"}>{item.name}</span>:null
                }
                {
                  hover!=item.name && on==item.name ?(
                    <span className={"relative z-10 text-black border-b-2 dark:border-white dark:text-white"}>{item.name}</span>
                  ):null
                }
                {
                  on!=item.name && hover!=item.name?(
                    <span className={"relative z-10 text-black dark:text-white"}>{item.name}</span>
                  ):null
                }
                {
                  hover==item.name && on==item.name ?(
                    <span className={"relative z-10 text-black border-b-2 bg-neutral-300 dark:border-black dark:text-dark"}>{item.name}</span>
                  ):null
                }
              </Link>
            );
          })}
          <button
          onClick={()=>{
            theme==="dark"?setTheme("light"):setTheme("dark")
          }}
          >
          {theme == "dark" ? <SunIcon/>:<MoonIcon/>}
        </button>
        </div>
      </motion.nav>
    </div>
  );
};

export default index;
