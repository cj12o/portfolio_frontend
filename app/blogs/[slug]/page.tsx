import Container from "@/components/container";
import { getSingleBlog } from "@/utils/mdx";
import { Metadata } from "next";
import { redirect } from "next/navigation";


export async function generateMetadata({params}:{params:{slug:string}}){
  const param=await params
  
  const singleBlog=await getSingleBlog(param.slug)

  if(!singleBlog||!singleBlog.frontmatter){
    return {title:"Blog not found"}
  }
  return {
    title:singleBlog.frontmatter.title+" - Chitransh Jain",
    description:singleBlog.frontmatter.description
  }
}


export default async function SingleBlogPage({params}:{params:{slug:string}}) {
    const param=await params
   
    const singleBlog=await getSingleBlog(param.slug)

    if(!singleBlog) redirect("/blogs")

    const {content,frontmatter}=singleBlog
    console.log(frontmatter)
   
  return (
    <div className="min-h-screen flex items-start justify-start">
      <Container classname="min-h-screen md:pt-20 md:pb-10">
        <div className="prose p-10 items-center mx-auto">
        {content}
        </div>
      </Container>
    </div>
  );
}
