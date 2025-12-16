"use client";
import Container from "@/components/container";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";

import { NAV_ITEMS } from "@/data";
import { redirect } from "next/navigation";

const index = () => {
  const items = NAV_ITEMS;
  const [hover, setHover] = useState<number | null>(-1);
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
    <Container>
      <motion.nav
        className="fixed top-0 inset-x-0 z-50 flex max-w-4xl mx-auto items-center justify-between py-3 px-4 rounded-l-full rounded-r-full bg-white "
        style={{
          boxShadow: scrolled ? "var(--shadow-s1)" : "none",
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
            redirect("/")
          }}
        />
        <div className="flex items-center gap-3">
          {items.map((item, idx) => {
            return (
              <Link
                className="relative text-sm px-2 py-1"
                onMouseEnter={() => setHover(idx)}
                onMouseLeave={() => setHover(-1)}
                href={item.href}
                key={idx}
              >
                {hover == idx ? (
                  <motion.span
                    layoutId="hovered-span"
                    className="h-full w-full absolute inset-0 rounded-md bg-neutral-300"
                  />
                ) : null}
                <span className="relative z-10">{item.name}</span>
              </Link>
            );
          })}
        </div>
      </motion.nav>
    </Container>
  );
};

export default index;
