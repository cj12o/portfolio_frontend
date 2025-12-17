import Container from "@/components/container";
import Projects from "@/components/projects";
import ProjectComponent from "@/components/projects";
import { Landingblogs } from "@/components/landingblogs";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";

export default function Home() {
  return (
    <div className="min-h-screen flex items-start justify-start">
      <Container classname="min-h-screen md:pt-20 md:pb-10">
        <div className="flex">
          <Heading>
            Hi I'm Chitransh Jain
          </Heading>
        </div>
        <Subheading>
          I use code as a medium to explore ideas — sometimes elegant, sometimes imperfect, but always intentional.    
        </Subheading>
        <ProjectComponent/>
        <Landingblogs/>
      </Container>
    </div>
  );
}
