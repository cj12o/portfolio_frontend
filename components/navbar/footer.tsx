import Link from 'next/link'
import React from 'react'
import { SiLinkedin,SiGithub} from 'react-icons/si'
import Container from '../container'

export const Footer = () => {
  return (
    <Container classname='flex justify-between p-3 border-t border-neutral-100'>
        <p className='text-xs text-neutral-500'>Build by:Chitransh Jain</p>
        <p></p>
        <div className='flex items-center justify-center gap-4'>
            <Link href={'https://www.linkedin.com/in/chitransh-jain-71bbb3336/'}>
                <SiLinkedin color="#0D597F" className="size-7 text-neutral-500 hover:text-neutral-700"/>
            </Link>
            <Link href={'https://www.github.com/cj12o'}>
                <SiGithub  color="#181717" className="size-7 text-neutral-500 hover:text-neutral-700"/>
            </Link>                
        </div>
    </Container>
  )
}
