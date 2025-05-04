import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import {
  Code,
  Briefcase,
  GraduationCap,
  Laptop,
  Blocks,
  Cpu,
  Rocket,
  CloudCog,
  Globe,
  Database,
  BrainCircuit,
  MapPin,
  Languages,
} from "lucide-react";

// Types
type Experience = {
  title: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
};

type Project = {
  title: string;
  description: string;
  tags: string[];
};

type SkillCategoryProps = {
  title: string;
  icon: React.ReactNode;
  skills: string[];
};

type SectionHeaderProps = {
  title: string;
  icon: React.ReactNode;
};

export default function Portfolio() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-yellow-500 opacity-5"></div>
          <div className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-yellow-500 opacity-5 rounded-full blur-3xl"></div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 z-10 text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Stephane Niyonizigiye
          </h1>
          <h2 className="text-2xl md:text-3xl text-yellow-400 mb-8">
            Software & Geospatial Developer | AI/ML Enthusiast
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-300">
            Computer Engineering graduate with expertise in Python, React, and
            OpenLayers. Passionate about Artificial Intelligence, Machine
            Learning, and Retrieval-Augmented Generation (RAG). Bilingual
            (FR/EN).
          </p>
          <div className="flex justify-center space-x-4 mt-10">
            <a
              href="mailto:stephaneniyonizigiye@gmail.com"
              className="px-6 py-3 bg-yellow-500 text-gray-900 rounded-lg font-bold hover:bg-yellow-400 transition-colors"
            >
              Contact Me
            </a>
            <a
              href="https://www.linkedin.com/in/stephane-n-101b231b7"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-800 text-white rounded-lg font-bold border border-yellow-500/30 hover:bg-gray-700 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>
      </section>

      {/* About Me Section */}
      <Section
        title="About Me"
        icon={
          <BrainCircuit
            className="text-yellow-400"
            size={28}
            aria-hidden="true"
          />
        }
        bg="bg-gray-950"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-12 bg-gray-900 border border-yellow-500/10 rounded-xl p-8 shadow-lg shadow-yellow-500/5 max-w-4xl mx-auto"
        >
          <p className="text-gray-300 mb-6 text-lg">
            Computer Engineering graduate with a growing passion for Artificial
            Intelligence, Machine Learning, and cutting-edge retrieval systems
            like Retrieval-Augmented Generation (RAG). At the University of
            Ottawa, I've contributed to real-world solutions by developing
            intelligent, accessible web applications using React, Flask, and
            OpenLayers, and working with geospatial data via PostGIS and
            Geoserver.
          </p>
          <p className="text-gray-300 mb-6 text-lg">
            Driven by a deep curiosity for how intelligent systems can enhance
            decision-making and human interaction, I've begun integrating
            machine learning techniques into my projects and exploring how RAG
            can power next-generation AI applications. My multidisciplinary
            experience—from cloud systems to frontend development—gives me a
            unique edge in building practical, end-to-end ML-powered systems.
          </p>
          <p className="text-gray-300 text-lg">
            Currently seeking opportunities to grow as an AI/ML Engineer or
            Applied Researcher, where I can apply my technical foundations,
            creative problem-solving, and eagerness to learn to meaningful,
            data-driven innovation.
          </p>
        </motion.div>
      </Section>

      {/* Experience Section */}
      <Section
        title="Experience"
        icon={
          <Briefcase className="text-yellow-400" size={28} aria-hidden="true" />
        }
      >
        <TimelineExperience
          experiences={[
            {
              title: "Web Developer",
              company: "University of Ottawa",
              period: "January 2025 - Present",
              description:
                "Developing Python Flask APIs, working with PostGIS databases, and building accessible React components with OpenLayers for geospatial data visualization.",
              tags: [
                "Python",
                "Flask",
                "React",
                "OpenLayers",
                "PostGIS",
                "Geoserver",
              ],
            },
            {
              title: "System Analyst",
              company: "University of Ottawa",
              period: "May 2024 - September 2024",
              description:
                "Enhanced IT operations by managing SCCM deployments, scaled Azure environments, and automated processes with batch scripts while maintaining Windows servers.",
              tags: ["Azure", "SCCM", "Windows", "Batch", "IT Operations"],
            },
            {
              title: "Component Engineer",
              company: "Curtiss-Wright Corporation",
              period: "January 2024 - May 2024",
              description:
                "Managed electronic components in SAP, analyzed technical specifications, conducted environmental compliance checks, and optimized database management in Oracle Agile.",
              tags: ["SAP", "Accuris", "Oracle Agile", "Technical Analysis"],
            },
            {
              title: "IT Specialist",
              company: "University of Ottawa",
              period: "February 2023 - January 2024",
              description:
                "Managed SQL databases, deployed Windows systems, designed network solutions, and oversaw equipment/software management with tools like TopDesk and Snipe-IT.",
              tags: ["SQL", "Windows AD", "SCCM", "TopDesk", "Snipe-IT"],
            },
            {
              title: "Process Assistant",
              company: "Amazon Fulfillment Centre",
              period: "October 2020 - November 2021",
              description:
                "Analyzed operational data for weekly reports, automated administrative tasks, led team meetings, and contributed to continuous improvement initiatives.",
              tags: [
                "Data Analysis",
                "Excel",
                "Team Leadership",
                "Process Optimization",
              ],
            },
            {
              title: "Web Administrator",
              company: "Wavetec",
              period: "February 2019 - August 2020",
              description:
                "Revamped website performance, upgraded SQL databases, implemented IoT systems with TCP/IP protocols, and integrated secure payment APIs.",
              tags: ["Web Development", "SQL", "IoT", "TCP/IP", "Payment APIs"],
            },
          ]}
        />
      </Section>

      {/* Education Section */}
      <Section
        title="Education"
        icon={
          <GraduationCap
            className="text-yellow-400"
            size={28}
            aria-hidden="true"
          />
        }
        bg="bg-gray-950"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-900 border border-yellow-500/10 rounded-xl p-8 shadow-lg shadow-yellow-500/5 w-full max-w-3xl mx-auto"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h3 className="text-2xl font-bold">University of Ottawa</h3>
              <p className="text-yellow-400 mt-1">
                Bachelor of Computer Engineering
              </p>
            </div>
            <div className="mt-2 md:mt-0">
              <span className="px-4 py-1 bg-yellow-500/10 text-yellow-400 rounded-full text-sm">
                2021-2025
              </span>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* Projects Section */}
      <Section
        title="Projects"
        icon={
          <Laptop className="text-yellow-400" size={28} aria-hidden="true" />
        }
      >
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Geospatial Data Visualization Platform",
              description:
                "Interactive web application using React, OpenLayers, and PostGIS to visualize and analyze complex geospatial datasets with custom filtering capabilities.",
              tags: ["React", "OpenLayers", "PostGIS", "GeoServer", "Flask"],
            },
            {
              title: "RAG-Enhanced Document Search System",
              description:
                "Developed a Retrieval-Augmented Generation system to improve document search accuracy using vector embeddings and large language models.",
              tags: ["Python", "RAG", "Vector Databases", "LLMs", "NLP"],
            },
            {
              title: "Computer Vision Object Detection",
              description:
                "Implementation of YOLOv8 models for real-time object detection in video streams with custom training for specific use cases.",
              tags: [
                "Computer Vision",
                "YOLOv8",
                "Python",
                "PyTorch",
                "OpenCV",
              ],
            },
            {
              title: "Multilingual Web Application",
              description:
                "Accessible and internationalized web platform built with React and Flask, supporting both English and French interfaces with screen reader compatibility.",
              tags: ["React", "Accessibility", "i18n", "Flask", "UX Design"],
            },
          ].map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </Section>

      {/* Skills Section */}
      <Section
        title="Technical Skills"
        icon={<Cpu className="text-yellow-400" size={28} aria-hidden="true" />}
        bg="bg-gray-950"
      >
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <SkillCategory
            title="Cloud & Infrastructure"
            icon={<CloudCog size={24} aria-hidden="true" />}
            skills={["Azure", "Windows Server", "SCCM", "IoT Systems"]}
          />
          <SkillCategory
            title="Programming"
            icon={<Code size={24} aria-hidden="true" />}
            skills={["Python", "JavaScript/TypeScript", "SQL", "Batch"]}
          />
          <SkillCategory
            title="Web Development"
            icon={<Globe size={24} aria-hidden="true" />}
            skills={["React", "Flask", "REST APIs", "Accessibility"]}
          />
          <SkillCategory
            title="Databases"
            icon={<Database size={24} aria-hidden="true" />}
            skills={["SQL", "PostgreSQL", "PostGIS", "Oracle Agile"]}
          />
          <SkillCategory
            title="AI & Machine Learning"
            icon={<BrainCircuit size={24} aria-hidden="true" />}
            skills={["Computer Vision", "RAG", "ML", "NLP"]}
          />
          <SkillCategory
            title="GIS & Spatial"
            icon={<MapPin size={24} aria-hidden="true" />}
            skills={["OpenLayers", "GeoServer", "PostGIS", "Spatial Analysis"]}
          />
          <SkillCategory
            title="Tools & Practices"
            icon={<Rocket size={24} aria-hidden="true" />}
            skills={["Git", "Agile/Kanban", "SAP", "TopDesk"]}
          />
          <SkillCategory
            title="Languages"
            icon={<Languages size={24} aria-hidden="true" />}
            skills={["French (Native)", "English (Professional)"]}
          />
        </div>
      </Section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-yellow-500 opacity-5"></div>
          <div className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-yellow-500 opacity-5 rounded-full blur-3xl"></div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 z-10 relative text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Currently seeking opportunities in AI/ML Engineering or Applied
            Research. Feel free to reach out to discuss potential
            collaborations.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
            <a
              href="mailto:stephaneniyonizigiye@gmail.com"
              className="px-8 py-4 bg-yellow-500 text-gray-900 rounded-lg font-bold hover:bg-yellow-400 transition-colors w-full md:w-auto"
            >
              stephaneniyonizigiye@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/stephane-n-101b231b7"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gray-800 text-white rounded-lg font-bold border border-yellow-500/30 hover:bg-gray-700 transition-colors w-full md:w-auto"
            >
              LinkedIn Profile
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

// General Section Wrapper
const Section = ({
  title,
  icon,
  bg = "bg-gray-900",
  children,
}: {
  title: string;
  icon: React.ReactNode;
  bg?: string;
  children: React.ReactNode;
}) => (
  <section className={`py-20 ${bg} relative overflow-hidden`}>
    <div className="absolute inset-0 z-0">
      <div className="absolute top-0 left-0 w-full h-full bg-yellow-500 opacity-5"></div>
      <div className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-yellow-500 opacity-5 rounded-full blur-3xl"></div>
    </div>
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="container mx-auto px-4 z-10 relative"
    >
      <SectionHeader title={title} icon={icon} />
      {children}
    </motion.div>
  </section>
);

// Header of sections
const SectionHeader = ({ title, icon }: SectionHeaderProps) => (
  <div className="flex items-center space-x-3">
    {icon}
    <h2 className="text-3xl font-bold">{title}</h2>
    <div className="h-px bg-yellow-400 flex-grow ml-4"></div>
  </div>
);

// Experience timeline
const TimelineExperience = ({ experiences }: { experiences: Experience[] }) => (
  <div className="relative mt-12">
    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-px bg-yellow-500/30"></div>
    {experiences.map((exp, index) => (
      <TimelineItem key={index} experience={exp} index={index} />
    ))}
  </div>
);

// Timeline Item
const TimelineItem = ({
  experience,
  index,
}: {
  experience: Experience;
  index: number;
}) => {
  const isEven = index % 2 === 0;
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div ref={ref} className="relative mb-16">
      <div
        className={`absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-7 w-4 h-4 rounded-full bg-yellow-400 border-4 border-gray-900 z-10 ${
          isInView ? "animate-pulse" : ""
        }`}
      ></div>
      <motion.div
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`md:w-1/2 ${
          isEven ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
        } ml-6 pl-6 md:pl-0 border-l border-yellow-500/30 md:border-l-0`}
      >
        <div className="bg-gray-800 rounded-lg p-6 border border-yellow-500/10 shadow-lg hover:shadow-yellow-500/10 transition-all duration-300 hover:-translate-y-1">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
            <h3 className="text-xl font-bold">{experience.title}</h3>
            <span className="px-3 py-1 bg-yellow-500/10 text-yellow-400 rounded-full text-xs mt-2 md:mt-0">
              {experience.period}
            </span>
          </div>
          <p className="text-yellow-400 font-medium mb-3">
            {experience.company}
          </p>
          <p className="text-gray-300 mb-4">{experience.description}</p>
          <div className="flex flex-wrap gap-2 mt-3">
            {experience.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="px-3 py-1 bg-gray-900 text-gray-300 rounded-full text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// Project Card
const ProjectCard = ({ title, description, tags }: Project) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="bg-gray-800 rounded-xl overflow-hidden border border-yellow-500/10 shadow-lg hover:shadow-yellow-500/15 transition-all duration-300 hover:-translate-y-2 group"
    >
      <div className="p-6">
        <h3 className="text-xl font-bold group-hover:text-yellow-400 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mt-3">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-900 text-gray-300 rounded-full text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// Skills Category Card
const SkillCategory = ({ title, icon, skills }: SkillCategoryProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 rounded-lg p-6 border border-yellow-500/10 shadow-lg hover:shadow-yellow-500/15 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="flex items-center space-x-3 mb-4">
        <div className="p-2 bg-yellow-500/10 rounded-lg text-yellow-400">
          {icon}
        </div>
        <h3 className="text-lg font-bold">{title}</h3>
      </div>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.3, delay: 0.1 * index }}
            className="text-gray-300 flex items-center"
          >
            <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-2"></span>
            {skill}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};
