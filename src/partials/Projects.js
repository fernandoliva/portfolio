import React from "react";
import ProjectCard from "./ProjectCard";
import "aos/dist/aos.css";

const Projects = ({ projects }) => {
    return (
        <div>
            <h1 className="mt-20 text-2xl md:text-4xl text-center font-extrabold">Mis proyectos</h1>
            {projects.map((project, i) => (
                <div data-aos="fade-up">
                    <ProjectCard project={project} key={i}/>
                </div>
            ))}
        </div>
    );
};

export default Projects;