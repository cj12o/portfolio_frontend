"use client";
import Container from "@/components/container";
import { motion } from "framer-motion";

import { SOCIAL_LINKS } from "@/data";
import { Heading } from "@/components/heading";
import { Sectionheading } from "@/components/sectionheading";
import { SiGithub,SiGmail,SiLinkedin } from "react-icons/si";
import Link from "next/link";
import { useState } from "react";
import { Send, SendIcon } from "lucide-react";
import axios from "axios";
import { cn } from "@/lib/utils";


const getIcons=(name:string):React.ReactNode|null=>{
  const size=30
  switch(name.toLocaleLowerCase()){
    case "gmail":
      return <SiGmail color="#EA4335" size={size} />
    case "linkedin":
      return <SiLinkedin size={size} color="#0D597F" />
    case "github":
      return <SiGithub  size={size} className="text-#181717 dark:text-white"/>
    default:
      return null
  }  
}

type PopUps={
  success:boolean,
  message:string
}


export default function Contact() {
  const socialLinks = SOCIAL_LINKS;
  const [email,setEmail]=useState("")
  const [message,setMessage]=useState("")
  const [name,setName]=useState("")
  const [popUp,setPopUp]=useState<PopUps|null>(null)
  
  const ept = async () => {
  try {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);

    await fetch(
      String(process.env.URL),
      {
        method: "POST",
        body: formData,
      }
    );

    setPopUp({ success: true, message: "Message Sent Successfully!" });
    setName("");
    setEmail("");
    setMessage("");
  } catch (err) {
    setPopUp({
      success: false,
      message: "Error in sending message, please try again",
    });
  }
};


  return (
    <div className="min-h-screen flex items-start justify-start dark:bg-bgdark">
      <Container classname="min-h-screen md:pt-20 md:pb-10">
        <Heading>
          Contact
        </Heading>

        <Sectionheading delay={0.02}>
           I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your visions. Feel free to reach out
          through any of the platforms below.
        </Sectionheading>
        {
          popUp && <div className={cn("dark:bg-white dark:text-black text-sm var(--shadow-s1) items-center justify-center flex gap-2 px-4 py-2",popUp.success?"text-green-500":"text-red-500")}>
            {popUp.message}
          </div>
        }
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="mt-4">
            <h2 className="text-lg font-semibold text-primary mb-6 dark:text-white/70 underline">
              Get in Touch
            </h2>
            <div className="space-y-6">
              {socialLinks.map((link, idx) => (
                <motion.a
                  key={idx}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-4 pb-3"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <span className="text-sm text-secondary group-hover:text-primary transition-colors">
                    {getIcons(link.name)}
                  </span>
                  <Link href={link.href}>{link.name}</Link>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Simple Form (Optional, keeping it minimal) */}
          <div>
            <h2 className="text-lg font-semibold text-primary mb-6 dark:text-white/70 underline mt-4">
              Send a Message 
            </h2>
            <form className="space-y-4"
              onSubmit={(e)=>{
                e.preventDefault()
                ept()
              }}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm text-secondary mb-2 dark:text-white/70"
                >
                  Name
                </label>
                <input
                  onChange={(e)=>{
                    setName(e.target.value)
                  }}
                  value={name}
                  type="text"
                  id="name"
                  className="w-full bg-neutral-50 border border-neutral-200 rounded-md px-4 py-3 text-sm outline-none focus:border-neutral-400 transition-colors text-black"
                  placeholder="Name please"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-secondary mb-2 dark:text-white/70"
                >
                  Email
                </label>
                <input
                  onChange={(e)=>{
                    setEmail(e.target.value)
                  }}
                  value={email}
                  type="email"
                  id="email"
                  className="w-full bg-neutral-50 border border-neutral-200 rounded-md px-4 py-3 text-sm outline-none focus:border-neutral-400 transition-colors text-black"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm text-secondary mb-2 dark:text-white/70"
                >
                  Message
                </label>
                <textarea
                  onChange={(e)=>{
                    setMessage(e.target.value)
                  }}
                  value={message}
                  id="message"
                  rows={4}
                  className="w-full bg-neutral-50 border border-neutral-200 rounded-md px-4 py-3 text-sm outline-none focus:border-neutral-400 transition-colors resize-none text-black"
                  placeholder="Hello..."
                />
              </div>
              <div></div>
              <button
                type="submit"
                className="flex bg-primary text-white text-sm font-medium px-6 py-3 rounded-md hover:bg-neutral-700 transition-colors mt-2"
              >
                Send Message
                <SendIcon className="ml-2"/>
              </button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
}
