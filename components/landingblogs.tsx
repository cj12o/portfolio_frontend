import { getAllblogs } from '@/utils/mdx'
import Link  from 'next/link'
import { Sectionheading } from './sectionheading'

export const Landingblogs = async() => {
    const allBlogs=await getAllblogs()
    const truncate=(str:string,length:number)=>{
        return str.length>length?str.substring(0,length)+"...":str
    }
  return (
    <div className=''>
        <Sectionheading delay={0.2} className='pb-2'>
            my write ups
        </Sectionheading>
        <div className="flex fl  ex-col gap-4 py-4 ">
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
                        <p  className="text-secondary max-w-lg pt-4 text-sm  md:text-sm">
                            {blog.description}
                        </p>
                    </Link>
                })
            }
        </div>
    </div>
  )
}

