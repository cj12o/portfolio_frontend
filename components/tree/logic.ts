export class GraphNode {
    private static nodecount = 0;
    private static adjacencyList: Map<string, GraphNode[]> = new Map();

    component: React.ReactNode;

    constructor(parent:string|null=null, value: string) {
        this.component=null
        if(!parent){
            GraphNode.adjacencyList.set(value,[])
        }
        else GraphNode.adjacencyList.get(parent)?.push(this)
    }

    static get adjacencylist(): Map<string, GraphNode[]> {
        return GraphNode.adjacencyList;
    }

    // static removeKeyFromMap(idx:number){
    //     GraphNode.adjacencyList.delete(idx)
    // }
}

// • Programming Languages: Python, Java, JavaScript (3 nodes)
// • gen & agentic AI: LangChain,Langraph (3 nodes) 
// • Frontend Technologies: Next.js, React, Tailwind CSS, HTML, CSS (6 nodes)
// • Backend Technologies: FastAPI, Django, Django REST Framework, Flask (5 nodes)
// • Machine Learning & Deep Learning: Scikit-learn,pandas & numpy (2 nodes)
// • Databases: SQL Server, PostgreSQL, MongoDB (sql,nosql) (6 nodes)
// • DevOps & CI/CD: Git, GitHub, Docker (4 nodes)
// 29 nodes total

export const setData=()=>{
    const data=[
        ["Python", "Java", "JavaScript"],
        ["LangChain", "Langraph"],
        ["Next.js", "React", "Tailwind CSS", "HTML", "CSS"],
        ["FastAPI", "Django", "Django REST Framework", "Flask"],
        ["Scikit-learn", "pandas & numpy"],
        ["SQL Server", "PostgreSQL", "MongoDB"],
        ["Git", "GitHub", "Docker"],
    ]


    const domains=["Programming Languages","gen & agentic AI","Frontend Technologies","Backend Technologies","Machine Learning & Deep Learning","Databases","DevOps & CI/CD"]


    new GraphNode(null, "tech_stack");

    domains.forEach((dom) => {
    new GraphNode("tech_stack", dom);
    });

    data.map((lst,idx)=>{
        lst.map((item)=>{
            new GraphNode(domains[idx], item);
        })
    })
}