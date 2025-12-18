import { title } from "process";

type Project = {
  id: string;
  techstack:{
    frontend:string [],
    backend:string [],
    GenAi:string [],
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
      GenAi:["Langchain","Langgraph","ChromaDB"],
      containerization:["Docker"],
      database:["Postgresql","ChromaDB"],
      other:["Redis"]
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
  techstack: {
    frontend: ["Streamlit"],
    backend: ["FastAPI"],
    GenAi: ["LangChain", "ChromaDB", "Ollama", "LMStudio"],
    containerization:[],
    database: ["MongoDB"],
    other:[]
  },
  title: "Personal RAG Chatbot",
  description:
    "A production-ready personal AI chatbot designed to explore real-world GenAI system design. The project focuses on async pipelines, retrieval-augmented generation (RAG), session-based memory, and real-time token streaming to deliver fast, contextual, and scalable conversational AI experiences.",
   videoUrl: "/demovids/chatbot_demo_vid.webm",
  challenges: [
    {
      problem:
        "Context switching between normal chat and RAG-based chat caused inconsistent memory behavior.",
      solution:
        "Implemented a unified session-level cache shared across both RAG and non-RAG pipelines to ensure seamless toggling.",
      technicalchallenge:
        "Maintaining conversational flow while dynamically enabling/disabling retrieval without duplicating context.",
      chlsolution: `
          Designed a common cache abstraction
          Synced session memory across RAG and standard chat
          Ensured deterministic context behavior across toggles
        `,
      achieved:
        "🔄 Smooth context continuity regardless of RAG mode."
    },
    {
      problem:
        "Embedding pipeline frequently crashed due to JSON parsing issues caused by special characters.",
      solution:
        "Switched from raw JSON chunks to clean text extraction directly from the database.",
      technicalchallenge:
        "Ensuring data reliability while reducing preprocessing overhead and latency.",
      chlsolution: `
          Normalized text before embedding
          Pulled clean session data directly from DB
          Reduced preprocessing complexity
        `,
      achieved:
        "🧠 Stable embedding pipeline with lower latency."
    },
    {
      problem:
        "Vector database size grew exponentially as entire session conversations were chunked.",
      solution:
        "Implemented automatic session-end summarization to store concise, meaningful vectors.",
      technicalchallenge:
        "Preserving important user-specific information while reducing vector storage.",
      chlsolution: `
          Triggered summarization at session end
          Stored compact summaries instead of raw chats
          Optimized vector DB for long-term retrieval
        `,
      achieved:
        "📉 Controlled data growth with higher retrieval quality."
    },
    {
      problem:
        "Synchronous backend calls caused the app to freeze on LLM or network failures.",
      solution:
        "Refactored the entire backend to an async-first architecture.",
      technicalchallenge:
        "Managing async LLM calls, DB operations, and streaming without race conditions.",
      chlsolution: `
          Migrated FastAPI endpoints to async
          Used non-blocking I/O for LLM calls
          Improved error handling and resilience
        `,
      achieved:
        "⚡ Responsive and scalable backend under load."
    },
    {
      problem:
        "Token streaming was inefficient due to short polling after full response generation.",
      solution:
        "Implemented true real-time token streaming directly from the LLM.",
      technicalchallenge:
        "Reducing Time To First Token (TTFT) while maintaining output consistency.",
      chlsolution: `
          Streamed tokens as generated by the model
          Eliminated post-response polling
          Optimized UX for instant feedback
        `,
      achieved:
        "🚀 Significantly reduced TTFT with real-time responses."
    },
    {
      problem:
        "Chat history and logs were unstructured and difficult to analyze.",
      solution:
        "Built session-wise and date-wise logging with export support.",
      technicalchallenge:
        "Tracking performance metrics alongside chat data without clutter.",
      chlsolution: `
          Stored structured logs in MongoDB
          Logged TTFT and token usage per response
          Enabled JSON export for analysis
        `,
      achieved:
        "📊 Clear observability into system performance."
    },
    {
      problem:
        "Frequent crashes due to invalid request payloads in FastAPI.",
      solution:
        "Adopted Pydantic models for strict data validation.",
      technicalchallenge:
        "Ensuring flexibility while enforcing strong typing.",
      chlsolution: `
          Defined request/response schemas
          Centralized validation logic
          Improved debuggability
        `,
      achieved:
        "🛡️ Robust APIs with predictable behavior."
    }
  ]
}
];

const filetree=["Intro.md","Challenges.tsx","Architecture Diagrams.md"]


const project_tech_front=[
  {
    id:"1",
    title:"Agentic Chatrooms",
    tech:["React","Django","DjangoRestFramework","Langgraph","Postgresql"],
  },
  {
    project_id:"2",
    title:"Personal RAG Chatbot",
    tech:["Streamlit","FastAPI","LangChain", "ChromaDB", "Ollama", "MongoDB"]
  },
]



export {projectsData,filetree,project_tech_front}




