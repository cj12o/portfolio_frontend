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
    title: string;
    description: string;
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
        title: "Knowledge Distribution",
        description:
          "Education is the cornerstone of personal and societal development. It empowers individuals with knowledge.",
      },
      {
        title: "Scalability",
        description:
          "Ensuring the system can handle concurrent users while maintaining real-time responsiveness.",
      },
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

const filetree=["Intro.md","Challenges.tsx","Github history"]

export {projectsData,filetree}


