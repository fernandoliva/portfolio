import React from "react";
import { FaPalette, FaReact, FaCode } from "react-icons/fa";

const BOOTSTRAP_FOR_SKILL_ICON = "text-4xl mx-auto inline-block";
const data = {
  name: "Fernando de la Oliva",
  title: "Front-End Developer / Sysadmin",
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
      skillName: "Frontend",
      skillIcon: <FaCode className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "Design/UX",
      skillIcon: <FaPalette className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "ReactJS",
      skillIcon: <FaReact className={BOOTSTRAP_FOR_SKILL_ICON} />,
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
