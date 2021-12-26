import React from "react";
import { FaAngular, FaReact, FaNodeJs } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiTailwindcss } from "react-icons/si";

const iconsClass = "text-4xl mx-auto inline-block";
const data = {
  name: "Fernando de la Oliva",
  title: "Front-End Developer / SysAdmin",
  social: {
    github: "https://github.com/fernandoliva",
    linkedin: "https://www.linkedin.com/in/fernandoliva/",
    email: "mailto:fernandoliva9@gmail.com",
  },
  about: {
    title: "Sobre mi",
    description: ["¡Hola! Me llamo Fernando, me apasiona el mundo IT y me encanta el Front end 💻","Tengo ya varios años de experiencia en el sector como Administrador de sistemas y Desarrollador Front end.","Actualmente creciendo y especializándome en MERN STACK aunque no me cierro a otras tecnologías como Angular o Vue 👨","Me encanta trabajar en equipo y valoro mucho la experiencia y los conocimientos que me puedan aportar las personas con las que trabajo, durante estos años he desarrollado aptitudes como ser resolutivo, trabajar bien bajo presión y tener capacidades de autogestión 📝"],
  },
  skills: [
    {
      skillName: "React",
      skillIcon: <FaReact className={iconsClass} />,
    },
    {
      skillName: "Angular",
      skillIcon: <FaAngular className={iconsClass} />,
    },
    {
      skillName: "NodeJS / ExpressJS",
      skillIcon: <FaNodeJs className={iconsClass} />,
    },
    {
      skillName: "Javascript",
      skillIcon: <SiJavascript className={iconsClass} />,
    },
    {
      skillName: "TypeScript",
      skillIcon: <SiTypescript className={iconsClass} />,
    },
    {
      skillName: "Tailwind CSS",
      skillIcon: <SiTailwindcss className={iconsClass} />,
    },
  ],
  projects: [
    {
      title: "React tailwind portfolio",
      description: "👨‍🎨 An open-source portfolio template built with React and Tailwind.",
      tags: [
        "template",
        "portfolio",
        "reactjs",
        "tailwindcss"
      ],
      link: "https://github.com/braydentw/react-tailwind-portfolio"
    },
    {
      title: "My personal website",
      description: "⚡ My portfolio built with NextJS and TailwindCSS.",
      tags: [
        "website",
        "portfolio",
        "nextjs",
        "tailwindcss"
      ],
      link: "https://github.com/braydentW/braydentw"
    }
  ]
};
export default data;
