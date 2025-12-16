"use client";
import Container from "./container"
import { eduTimeline } from "@/data/aboutme"
import Image from "next/image"
import { motion } from "framer-motion"

export const Timeline = () => {
  return (
    <Container classname="relative p-4 md:p-5 bg-neutral-100 rounded-xl md:ml-15">

      {/* SINGLE timeline line */}
      <div className="absolute left-14.5 top-0 h-full w-[2px] bg-black z-10" />

      {eduTimeline.map((edu, idx) => (
        <motion.div
          key={idx}
          whileHover={{ scale: 1.07 }}
          transition={{ type: "spring", stiffness: 30 }}
          className="flex relative z-20"
        >
          <div className="p-4">
            <Image
              src={edu.image}
              height={50}
              width={50}
              alt={edu.organisation}
              className="rounded-full border-2 border-black"
            />
          </div>

          <div className="mt-2.5 w-full">
            <h3 className="text-primary font-bold">
              {edu.organisation}
            </h3>

            <div className="flex">
              <h4 className="mr-4">{edu.domain}</h4>
              <p>
                {new Date(edu.startdate!).toLocaleDateString("en-US", {
                  month: "short",
                  year: "numeric",
                })}{" "}
                –{" "}
                {new Date(edu.enddate!).toLocaleDateString("en-US", {
                  month: "short",
                  year: "numeric",
                })}
              </p>
            </div>

            <p>{edu.score}</p>
          </div>
        </motion.div>
      ))}
    </Container>
  )
}
