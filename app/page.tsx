import Container from "@/components/container";
import Projects from "@/components/projects";
import Stack from "@/components/stack";
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
          I'm an aspiring software engineer with a passion for building scalable
          and efficient systems to serve the needs of users.
        </Subheading>
        <ProjectComponent/>
        <Landingblogs/>
      </Container>
    </div>
  );
}
