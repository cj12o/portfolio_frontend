type architectureTyp = {
    project_id: string;
    pts:string[];
    diagrams:string[];
}[]



const ArchitecturalData:architectureTyp=[
    {
        project_id:"1",
        pts:[
            "React client communicates via REST and WebSockets",
            "Django Channels powers real-time chat and notifications",
            "Django REST APIs handle room and user logic",
            "WebSocket layer streams messages and LLM responses",
            "Celery workers process moderation and AI tasks async",
            "ML models classify message safety",
            "LangGraph agents generate polls and threads",
            "Summaries are generated after moderated messages",
            "PostgreSQL stores chat and metadata",
            "Redis enables queues, cache, and counters"
        ],
    }
]





