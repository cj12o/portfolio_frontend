import Intro from "@/components/projectpage/introduction";
import Container from "@/components/container";
import { projectsData } from "@/data/project-data";

export default function Testing(){
    return(
        <Container classname="mt-10">

            <div className="w-full bg-red-500">
                <div></div>
                <Intro project_id="1"/>  
            </div>
        </Container>
    )
}