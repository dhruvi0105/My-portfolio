"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Nextjs Portfolio",
    description: "My basic portfolio showcasing my Web Development skills. Technoogies used: NextJs, TailwindCSS, Framer Motion",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],

  },
  {
    id: 2,
    title: "V-Khabar (Social Media Platform)",
    description: "Currently I am working on Vkhabar a social media platform specially curated for VIT clubs and students to share social event details. Technolgies to be used : Reactjs, TailwindCSS, Framer Motion, MaerialUI, Springboot, Spring Security, MySQL etc as needed",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    
  },
  {
    id: 3,
    title: "Expense Tracker",
    description: "It is a basic expense tracker to add budgets and track your expenses according to that and also to display the savings.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    
  },
  {
    id: 4,
    title: "Gesture Sensing Lock",
    description: "A basic gesture sensing lock programmed on Arduino Uno using the PAJ7620 sensor. It gets unlocked only on particular pattern of gesture set by the owner. ",
    image: "/images/projects/4.png",
    tag: ["All", "Hardware"],

  },
  {
    id: 5,
    title: "Hospital Management System",
    description: "Developed a python GUI with SQL database having functionalities to add delete and view the patient lists, used pyttsx3 for text to speech conversion",
    image: "/images/projects/5.png",
    tag: ["All", "Database Management"],

  },
 
];
const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="py-8 px-4 md:px-8 lg:px-16">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-white mt-4 mb-6 md:mb-8">
        My Projects
      </h2>
      <div className="text-white flex flex-wrap justify-center items-center gap-2 mb-6 md:mb-8">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Hardware"
          isSelected={tag === "Hardware"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Database Management"
          isSelected={tag === "Database Management"}
        />
      </div>
      <ul
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8"
      >
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};


export default ProjectsSection;
