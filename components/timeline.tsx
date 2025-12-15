import Container from "./container"
import { eduTimeline } from "@/data/aboutme"
import Image from "next/image"

export const Timeline=()=>{
    return(
        <Container classname="relative p-4 md:p-5 bg-neutral-100 rounded-xl md:ml-15">
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
                        <div className="items-center justify-center mt-2.5 bg-orange-500 w-full">
                            <h3 className="text-primary font-bold">{edu.organisation}</h3>
                            <div className="flex bg-orange w-full">
                              <div className="bg-red-500 w-5/8 md:ml-2">
                                <h4>
                                  {edu.domain}
                                </h4>
                              </div>
                              <div className="bg-green-500 ">
                                <p>{edu.startdate}-{edu.enddate}</p>
                              </div>
                            </div>
                            <p>{edu.score}</p>
                        </div>
                    </div>
                })
            }
        </Container>
    ) 
}