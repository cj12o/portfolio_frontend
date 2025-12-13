import { Inter } from "next/font/google"
import Container from "@/components/container"
import Projects from "@/components/projects"

export default function Home() {
  return (
    <div className="min-h-screen flex items-start justify-start">
     <Container classname="min-h-[200vh] md:pt-20 md:pb-10">
      <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-primary">
        Chitransh Jain
      </h1>
      <p  className="text-secondary text-sm md:text-base md:text-sm pt-4 max-w-lg">
        I'm an aspiring software engineer with a passon 
        for building scalable and efficient systems to server 
        the needs of users.
      </p>
      <Projects/>
     </Container>
    </div>
  );
}
