import Container from "@/components/container";
import { getSingleBlog } from "@/utils/mdx";
import { Metadata } from "next";
import { redirect } from "next/navigation";


export const metadata:Metadata={
    title:"fbheee",
    description:"erebe"
}


export default async function SingleBlogPage({params}:{params:{slug:string}}) {
    
    const param=await params
   
    const singleBlog=await getSingleBlog(param.slug)

    if(!singleBlog) redirect("/blogs")

    const {content,frontmatter}=singleBlog
    console.log(frontmatter)
   
  return (
    <div className="min-h-screen flex items-start justify-start">
      <Container classname="min-h-[200vh] md:pt-20 md:pb-10">
        <div className="prose p-10 items-center mx-auto">
        {content}
        </div>
      </Container>
    </div>
  );
}
