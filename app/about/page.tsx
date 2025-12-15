import Container from "@/components/container";
import {Timeline} from '@/components/timeline'

export default function About() {
  return (
    <div className="min-h-screen flex items-start justify-start">
      <Container classname="min-h-[200vh] px-10 md:pt-20 md:pb-10">
        <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-primary">
          About Me
        </h1>
        <p className="text-secondary text-sm md:text-base pt-4 max-w-2xl leading-relaxed">
          I'm a passionate software engineer who loves turning ideas into
          reality through code. With a strong foundation in full-stack
          development, I focus on creating efficient, scalable solutions that
          make a real impact.
        </p>
        <p className="text-secondary text-sm md:text-base pt-4 max-w-2xl leading-relaxed">
          Here's my Education Timeline
          <div>
            <Timeline/>
          </div>
        </p>
      </Container>
    </div>
  );
}
