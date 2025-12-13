import Container from "@/components/container";
import Projects from "@/components/projects";
import Stack from "@/components/stack";

export default function Home() {
  return (
    <div className="min-h-screen flex items-start justify-start">
      <Container classname="min-h-[200vh] md:pt-20 md:pb-10">
        <div className="flex">
          <h2 className="text-2xl md:text-4xl tracking-tight text-primary mr-3">
          Hi I'm 
        </h2>
        <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-primary underline">
          Chitransh Jain
        </h1>
        </div>
        <p className="text-secondary text-sm md:text-base md:text-sm pt-4 max-w-lg">
          I'm an aspiring software engineer with a passion for building scalable
          and efficient systems to serve the needs of users.
        </p>
        <Stack />
        <Projects />
      </Container>
    </div>
  );
}
