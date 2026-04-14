import Link from 'next/link'
import React from 'react'
import {SiGithub} from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa'
import Container from '../container'

export const Footer = () => {
  return (
    <div className='dark:bg-bgdark'>
      <Container classname='flex justify-between p-3 border-t border-neutral-100 dark:bg-black/50'>
          <p className='text-neutral-500 font-medium text-lg'>Build by : Chitransh Jain</p>
          <div className='flex items-center justify-center gap-4'>
              <Link href={'https://www.linkedin.com/in/chitransh-jain-71bbb3336/'}>
                  <FaLinkedin color="#0D597F" className="size-7 text-neutral-500 hover:text-neutral-700 dark:text-white"/>
              </Link>
              <Link href={'https://www.github.com/cj12o'}>
                  <SiGithub  className="size-7 text-neutral-500 hover:text-neutral-700"/>
              </Link>                
          </div>
      </Container>
    </div>
  )
}
