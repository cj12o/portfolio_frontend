import { Inter } from "next/font/google"
import Container from "@/components/container"


export default function Home() {
  return (
    <div className="min-h-screen flex items-start justify-start">
     <Container>
      <h1 className="text-2xl md:text-4xl font-bold tracking-tight">
        Hello ,there!
      </h1>
      <p>
        I'm an aspiring software engineer with a passon 
        for building scalable and efficient systems to server 
        the needs of users.
      </p>
     </Container>
    </div>
  );
}
