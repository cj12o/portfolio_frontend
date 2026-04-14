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
      GenAi:["Langchain","Langgraph"],
      containerization:["Docker"],
      database:["Postgresql","ChromaDB"],
      other:["Redis"]
    },
    title: "Agentic Chatrooms",
    description:"A  real-time chat system that integrates AI agents, background task processing, and WebSocket-based communication. Designed with Django, Celery, Redis, and LangGraph to ensure high concurrency, real-time moderation, and intelligent room recommendations.",
    videoUrl: "/demovids/agentic_chatrooms.mp4",
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
      frontend: ["React", "Vite", "Tailwindcss", "shadcn/ui"],
      backend: ["FastAPI"],
      GenAi: ["OpenAI GPT-4o", "text-embedding-3-large", "Qdrant"],
      containerization: ["Docker"],
      database: ["PostgreSQL", "Qdrant"],
      other: ["AWS S3", "AWS"]
    },
    title: "InterviewInsight",
    description:
      "A full-stack AI-powered recruitment platform where hiring managers upload job descriptions and candidate resumes/transcripts. The system parses JDs into structured parameters, ranks resumes with ATS-style weighted scoring, extracts and embeds interview Q&A into a vector store, then generates per-skill scores, weakness summaries, and personalised learning plans via LLM pipelines.",
    challenges: [
      {
        problem: "JDs vary wildly in format — extracting consistent, comparable skill tags across different roles was unreliable with naive prompting.",
        solution: "Designed a GPT-4o structured-output schema (JdStructuredOutput) that forces the model to emit 4–10 concise, domain-agnostic derived_tags alongside YOE, experience level, and responsibilities.",
        technicalchallenge: "Derived tags had to be stable enough to serve as filter keys in Qdrant retrieval downstream — inconsistent casing or verbosity broke metadata filtering.",
        chlsolution: `
          Constrained the LLM output to lowercase, short labels
          Used pydantic-settings strict validation on the response
          Tags became the shared vocabulary across all three AI pipelines
        `,
        achieved: "🎯 Consistent, reusable tags that power every downstream scoring and retrieval step."
      },
      {
        problem: "Interview transcripts can exceed 40k characters — sending them whole to GPT-4o hits context limits and inflates cost.",
        solution: "Applied RecursiveCharacterTextSplitter (chunk_size=30k, overlap=2k) before Q/A extraction, then embedded each pair with text-embedding-3-large and stored them in Qdrant with tag metadata.",
        technicalchallenge: "Maintaining referential integrity: old Q/A rows in Postgres and stale Qdrant points had to be purged before re-ingestion to prevent score contamination.",
        chlsolution: `
          Atomic clear-then-insert: delete Postgres rows and Qdrant points before upserting
          Each Q/A pair stored with qdrant_point_id for deterministic cleanup
          Chunking overlap preserves context across split boundaries
        `,
        achieved: "📄 Reliable re-ingestion with no stale vectors polluting retrieval."
      },
      {
        problem: "Resume sections (Education, Experience, Skills, Projects) carry different signal strength — treating all chunks equally produced noisy ATS scores.",
        solution: "Built a regex-based section splitter with alias normalisation, then applied weighted cosine similarity: skills=0.4, experience=0.3, projects=0.2, education=0.1.",
        technicalchallenge: "Section headers vary enormously ('Work History', 'Professional Experience', 'Employment') — a fixed regex would silently drop sections.",
        chlsolution: `
          Alias normalisation map collapses variants to canonical section names
          Large sections re-chunked at 500 chars to avoid diluting embeddings
          Missing sections default to zero weight rather than crashing the pipeline
        `,
        achieved: "📊 ATS scores that reflect real hiring signal, not just keyword density."
      },
      {
        problem: "All four AI pipelines (JD analysis, transcript Q/A, scoring, resume ranking) are compute-heavy — blocking FastAPI would time out the client.",
        solution: "Every pipeline is queued with FastAPI BackgroundTasks and runs fully async; the endpoint returns immediately with a 202 while work proceeds in the background.",
        technicalchallenge: "Background tasks cannot share the request-scoped SQLAlchemy session — they need their own DB connection lifecycle.",
        chlsolution: `
          Background services call get_session() directly and open their own AsyncSession blocks
          All DB and S3 I/O uses async drivers (asyncpg, aiobotocore)
          Status field on ScoreReport/ResumeRank lets the frontend poll for completion
        `,
        achieved: "⚡ Non-blocking pipelines that scale without freezing the API."
      }
    ]
  },
  {
  id: "3",
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

const filetree=["Intro.md","Challenges.tsx","Details.md"]


const project_tech_front=[
  {
    id:"1",
    title:"Agentic Chatrooms",
    image:"/assets/Chatroom_img.png",
    tech:["React","Django","DjangoRestFramework","Langgraph","Postgresql","Aws","Docker","Celery","ChromaDB","Redis","ChromaDb"],
    description:"When conversations die, communities fade. Agentic Chatroom autonomously maintains engagement using scheduled AI-driven prompts, polls, and context-aware interactions.",
    siteUrl:`${process.env.NEXT_PUBLIC_BASE_URL_CHATROOMS}`,
  },
  {
    id:"2",
    title:"InterviewInsight",
    image:"/assets/interview_insight_img.png",
    tech:["React","FastAPI","PostgreSQL","Qdrant","AWS","OpenAI GPT-4o","Docker"],
    description:"Upload a JD and candidate resumes or transcripts — InterviewInsight parses skills, ranks resumes with weighted ATS scoring, extracts and embeds interview Q&A, then generates per-skill scores, weakness breakdowns, and personalised learning plans.",
    siteUrl:`${process.env.NEXT_PUBLIC_BASE_URL_INTERVIEWINSIGHT}`,
  },
  {
    id:"3",
    title:"Personal RAG Chatbot",
    image:"/assets/rag_chatbot_img.png",
    tech:["Streamlit","FastAPI","LangChain", "ChromaDB", "Ollama", "MongoDB"],
    description:"A production-ready personal AI chatbot with RAG, session-based memory, and real-time token streaming — built to explore async GenAI system design using LangChain, FastAPI, ChromaDB, and MongoDB.",
    siteUrl:"",
  },
]


const project_details=[
  {
    id:"1",
    title:"Agentic Chatrooms",
    Linkedin:"https://www.linkedin.com/posts/chitransh-jain-71bbb3336_agentic-chat-rooms-over-the-last-few-weeks-activity-7402819040320413696-LHbh?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFSJ90cBsaH33v0UDNWe7NolkeGOYPTcSN8",
    Github:"https://github.com/cj12o/Chatroom",
  },
  {
    id:"2",
    title:"InterviewInsight",
    Linkedin:"",
    Github:"https://github.com/cj12o/InterviewInsight",
  },
  {
    id:"3",
    title:"Personal RAG Chatbot",
    Linkedin:"https://www.linkedin.com/posts/chitransh-jain-71bbb3336_built-my-personal-ai-chatbot-with-session-activity-7344761221859966976-T7nq?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFSJ90cBsaH33v0UDNWe7NolkeGOYPTcSN8",
    Github:"https://github.com/cj12o/Langchain-chatbot",
  }
]

export {projectsData,filetree,project_tech_front,project_details}




