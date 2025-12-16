import Container from "@/components/container";
import { Metadata } from "next";
import { getAllblogs } from "@/utils/mdx";
import Image from "next/image";
import Link from "next/link";
import { Heading } from "@/components/heading";


export const metadata:Metadata={
    title:"All  blogs -Chitransh Jain",
    description:"All blogs"
}



export default async function BlogsPage() {

    const allBlogs=await getAllblogs()
    
    return (
    <div className="min-h-screen flex items-start justify-start">
      <Container classname="min-h-screen md:pt-20 md:pb-10">
        <Heading>
          All blogs
        </Heading>
        <div className="flex flex-col gap-4 py-4 ">
            {
                allBlogs && allBlogs.map((blog,idx)=>{
                    return <Link href={`/blogs/${blog.slug}`} key={blog.title}>
                        <div className="flex items-center justify-between">
                            <h2 className="text-primary text-base font-bold tracking-tight">
                                {blog.title}
                            </h2>
                            <p className="text-secondary text-sm md:text-sm">
                                {new Date(blog.date||"").toLocaleDateString("en-us",{
                                    weekday:"long",
                                    year:"numeric",
                                    month:"short",
                                    day:"numeric"
                                })}
                            </p>
                        </div> 
                        <p  className="text-secondary max-w-lg pt-2 text-sm  md:text-sm">
                            {blog.description}
                        </p>
                    </Link>
                })
            }
        </div>
      </Container>
    </div>
  );
}
