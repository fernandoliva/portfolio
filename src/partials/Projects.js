import React, { useEffect } from "react";
import ProjectCard from "./ProjectCard";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = ({ projects }) => {
    useEffect(() => {
        AOS.init({
          once: true,
        });
      });
    return (
        <div data-aos="fade-up" data-aos-duration="1500">
            <h1 className="mt-20 text-2xl md:text-4xl text-center font-extrabold">Mis proyectos</h1>
            {projects.map((project, i) => (
                <ProjectCard project={project} key={i}/>
            ))}
        </div>
    );
};

export default Projects;