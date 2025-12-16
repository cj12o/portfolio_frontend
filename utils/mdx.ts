import {promises as fs} from "fs"
import path from "path"
import { compileMDX } from "next-mdx-remote/rsc"

type Frontmatter={
    title:string;
    description:string;
    date:string;
    image:string;
}
export const getSingleBlog=async (slug:string)=>{
    try{
        const slug_new=`${slug}.mdx`
        const singleBlog=await fs.readFile(path.join(process.cwd(),"data/blogsdata",slug_new),'utf8')
        
        const {content,frontmatter}=await compileMDX<Frontmatter>({
            source:singleBlog,
            options:{parseFrontmatter:true}
        })
        return {content,frontmatter}
    }catch(e){
        return null
    }
}


export const getAllblogs=async()=>{
    try{
        const files=await fs.readdir(path.join(process.cwd(),'data/blogsdata'))
        
        const allBlogs=await Promise.all(files.map(async file=>{
            const slug=file.replace('.mdx','');
            const frontmatter=await getFrontmatter(file);
            return {slug,...frontmatter}
        }))

        return allBlogs

    }catch(e){
        console.error(e)
        return null
    }
}

const getFrontmatter=async(slug:string)=>{
    const singleBlog=await fs.readFile(path.join(process.cwd(),"data/blogsdata",slug),'utf8')

    if(!singleBlog) return null

    const {frontmatter}=await compileMDX<Frontmatter>({
        source:singleBlog,
        options:{parseFrontmatter:true}
    })
    return frontmatter
}