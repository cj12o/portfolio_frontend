import Container from "./container"
import { eduTimeline } from "@/data/aboutme"
import Image from "next/image"

export const Timeline=()=>{
    return(
        <Container classname="relative border-2 border-black p-4 md:p-5 bg-red-500 md:ml-15">
            {
                eduTimeline.map((edu,idx)=>{
                    return <div key={idx} className="flex ">
                        <div className="absolute z-20 left-14.5 top-0 h-full w-[2px] bg-black" >
                        </div>
                        <div className="z-30 p-4">
                            <Image src="/neymar.jpg" height={50} width={50} alt={edu.organisation}
                            className="rounded-full border-2 border-black"
                            ></Image>
                        </div>
                        <div className="">
                            <h3>{edu.organisation}</h3>
                            <div className="flex">
                                <h4>{edu.domain}</h4>
                                <p>{edu.startdate}-{edu.enddate}</p>
                            </div>
                            <p>{edu.score}</p>
                        </div>
                    </div>
                })
            }
        </Container>
    ) 
}