type Project = {
  id: string;
  techstack:{
    frontend:string [],
    backend:string [],
    containerization:string [],
    database:string [],
    other:string[]
  },
  title: string;
  description: string;
  videoUrl?: string; // Made optional
  challenges: {
    problem: string;
    solution: string;
    technicalchallenge?:string;
    chlsolution?:string;
    achieved: string;
  }[];
};

// Mock Data based on user input
const projectsData: Project[] = [
  {
    id: "1",
    techstack:{
      frontend:["React","Tailwindcss"],
      backend:["Django","DjangoRestFramework","DjangoChannels","Celery"],
      containerization:["Docker"],
      database:["Postgresql"],
      other:["Langchain","Langgraph"]
    },
    title: "Agentic Chatrooms",
    description:
      "Education is the cornerstone of personal and societal development. It empowers individuals with knowledge, critical thinking skills, and the ability to make amplified the role of education, making lifelong learning essential to adapt to rapid changes. Moreover, education supports innovation and critical analysis, which are vital for solving complex global challenges such as climate change, poverty, and public health crises.",
    videoUrl: "/demovids/21-35-51.mp4",
    challenges: [
      {
        problem: "Most chat rooms start strong… and then gradually go silent.",
        solution:"I built a LangGraph-based agent that runs on a scheduler and keeps rooms active through polls, relevant comments, engagement prompts, and context-aware messages.",
        technicalchallenge:"Django runs in a single process — adding AI agents + local LLMs directly would block the server and crash performance.",
        chlsolution:`
          Used Django + Celery
          Moved AI logic into background workers
          Each agent task runs as a separate process (non-blocking)
          Updates pushed to the frontend via WebSockets in real-time
        `,
        achieved:"🎯 Concurrency + AI agents working together without killing Django."
      },
      {
        problem:"Needed automatic moderation that doesn’t rely on expensive LLM calls every time a message comes in.",
        solution:"Trained a Logistic Regression toxicity model on Google's Jigsaw Dataset",
        technicalchallenge:"How to moderate in Real time as constant db polling is poor choice",
        chlsolution:`
          A Django signal on message creation increase counter kept in redis to avoid race conditions.
          Once counter reaches threshold,Messages are batched and sent to celery task where a model predicts, and if its toxic, it’s dropped.
          Frontend gets updates via WebSockets with moderated message.
        `,
        achieved:"✅ No reload,no lag,message moderation is literally real-time."
      },
      {
        problem:"Pure LLM recommendations are random,pure classical ML is too weak.",
        solution:`Solution: Hybrid Approach.
        Get user history from top sessions
        Sort by time spent per room
        Fetch similar rooms from vector DB
        Send a short LLM prompt to select final recommendations with reasoning`,
        achieved:"🚀 Fast & efficient way of recommendation with higher accuracy"
      }
    ],
  },
  {
    id: "2",
    techstack:["python","js","langraph"],
    title: "Data Analytics Engine",
    videoUrl: "/demovids/21-35-51.mp4",
    description:
      "A powerful data processing pipeline designed to handle large datasets with ease. Implements advanced algorithms for pattern recognition and predictive modeling.",
    challenges: [
      {
        title: "Data Integrity",
        description:
          "Maintaining high accuracy and consistency across distributed data shards.",
      },
    ],
  },
  {
    id: "3",
    techstack:["python","js","langraph"],
    title: "Infrastructure Config",
    videoUrl: "/demovids/21-35-51.mp4",
    description:"Configuration management system for automated deployment and scaling of microservices architecture.",
    challenges: [],
  },
];

const filetree=["Intro.md","Challenges.tsx","Architecture Diagrams.md"]

export {projectsData,filetree}


