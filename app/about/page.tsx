import Container from "@/components/container";

export default function About() {
  const skills = [
    "React & Next.js",
    "TypeScript",
    "Node.js",
    "Python & Django",
    "PostgreSQL & MongoDB",
    "REST APIs & GraphQL",
  ];

  const experience = [
    {
      period: "2023 - Present",
      role: "Full Stack Developer",
      company: "Freelance",
      description: "Building scalable web applications for clients worldwide.",
    },
    {
      period: "2022 - 2023",
      role: "Software Engineer Intern",
      company: "Tech Startup",
      description:
        "Developed features for a SaaS platform using React and Node.js.",
    },
  ];

  return (
    <div className="min-h-screen flex items-start justify-start">
      <Container classname="min-h-screen md:pt-20 md:pb-10">
        {/* Header */}
        <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-primary">
          About Me
        </h1>
        <p className="text-secondary text-sm md:text-base pt-4 max-w-2xl leading-relaxed">
          I'm a passionate software engineer who loves turning ideas into
          reality through code. With a strong foundation in full-stack
          development, I focus on creating efficient, scalable solutions that
          make a real impact.
        </p>

        {/* Skills Section */}
        <div className="mt-12">
          <h2 className="text-xl md:text-2xl font-semibold text-primary mb-6">
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className="px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg text-sm text-primary font-medium hover:border-neutral-300 transition-colors"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className="mt-12">
          <h2 className="text-xl md:text-2xl font-semibold text-primary mb-6">
            Experience
          </h2>
          <div className="space-y-6">
            {experience.map((exp, idx) => (
              <div
                key={idx}
                className="border-l-2 border-neutral-300 pl-6 pb-6 last:pb-0"
              >
                <p className="text-xs text-secondary mb-1">{exp.period}</p>
                <h3 className="text-lg font-semibold text-primary">
                  {exp.role}
                </h3>
                <p className="text-sm text-secondary mb-2">{exp.company}</p>
                <p className="text-sm text-secondary leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-12">
          <h2 className="text-xl md:text-2xl font-semibold text-primary mb-6">
            Education
          </h2>
          <div className="border-l-2 border-neutral-300 pl-6">
            <p className="text-xs text-secondary mb-1">2020 - 2024</p>
            <h3 className="text-lg font-semibold text-primary">
              Bachelor of Technology
            </h3>
            <p className="text-sm text-secondary mb-2">Computer Science</p>
            <p className="text-sm text-secondary">
              Focused on software engineering, algorithms, and web development.
            </p>
          </div>
        </div>

        {/* Personal Interests */}
        <div className="mt-12">
          <h2 className="text-xl md:text-2xl font-semibold text-primary mb-4">
            Beyond Code
          </h2>
          <p className="text-sm md:text-base text-secondary leading-relaxed max-w-2xl">
            When I'm not coding, you'll find me exploring new technologies,
            contributing to open-source projects, reading tech blogs, or
            enjoying a good game of football. I believe in continuous learning
            and staying curious about the ever-evolving tech landscape.
          </p>
        </div>
      </Container>
    </div>
  );
}
