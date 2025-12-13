"use client";
import Container from "@/components/container";
import { motion } from "framer-motion";

export default function Contact() {
  const socialLinks = [
    {
      name: "Email",
      value: "chitransh@example.com",
      href: "mailto:chitransh@example.com",
    },
    { name: "Twitter", value: "@chitransh", href: "https://twitter.com" },
    {
      name: "GitHub",
      value: "github.com/chitransh",
      href: "https://github.com",
    },
    {
      name: "LinkedIn",
      value: "linkedin.com/in/chitransh",
      href: "https://linkedin.com",
    },
  ];

  return (
    <div className="min-h-screen flex items-start justify-start">
      <Container classname="min-h-screen md:pt-20 md:pb-10">
        <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-primary">
          Contact
        </h1>
        <p className="text-secondary text-sm md:text-base pt-4 max-w-2xl leading-relaxed mb-12">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your visions. Feel free to reach out
          through any of the platforms below.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-lg font-semibold text-primary mb-6">
              Get in Touch
            </h2>
            <div className="space-y-6">
              {socialLinks.map((link, idx) => (
                <motion.a
                  key={idx}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <span className="text-sm text-secondary group-hover:text-primary transition-colors">
                    {link.name}
                  </span>
                  <div className="text-base font-medium text-primary mt-1 border-b border-transparent group-hover:border-neutral-300 inline-block transition-all pb-0.5">
                    {link.value}
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Simple Form (Optional, keeping it minimal) */}
          <div>
            <h2 className="text-lg font-semibold text-primary mb-6">
              Send a Message
            </h2>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm text-secondary mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-neutral-50 border border-neutral-200 rounded-md px-4 py-3 text-sm outline-none focus:border-neutral-400 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-secondary mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-neutral-50 border border-neutral-200 rounded-md px-4 py-3 text-sm outline-none focus:border-neutral-400 transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm text-secondary mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-neutral-50 border border-neutral-200 rounded-md px-4 py-3 text-sm outline-none focus:border-neutral-400 transition-colors resize-none"
                  placeholder="Hello..."
                />
              </div>
              <button
                type="submit"
                className="bg-primary text-white text-sm font-medium px-6 py-3 rounded-md hover:bg-neutral-700 transition-colors mt-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
}
