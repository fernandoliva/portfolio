import React from "react";
import { FaAngular, FaReact, FaNodeJs } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiTailwindcss, SiPhp, SiSymfony,SiWordpress } from "react-icons/si";

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
      color: "#61dafb"
    },
    {
      skillName: "Angular",
      skillIcon: <FaAngular className={iconsClass} />,
      color: "#dd0031"
    },
    {
      skillName: "NodeJS",
      skillIcon: <FaNodeJs className={iconsClass} />,
      color: "#339933"
    },
    {
      skillName: "Javascript",
      skillIcon: <SiJavascript className={iconsClass} />,
      color: "#f7df1e"
    },
    {
      skillName: "TypeScript",
      skillIcon: <SiTypescript className={iconsClass} />,
      color: "#007acc"
    },
    {
      skillName: "Tailwind CSS",
      skillIcon: <SiTailwindcss className={iconsClass} />,
      color: "#2979ff"
    },
    {
      skillName: "PHP",
      skillIcon: <SiPhp className={iconsClass} />,
      color: "#4F5D95"
    },
    {
      skillName: "Symfony",
      skillIcon: <SiSymfony className={iconsClass} />,
      color: "#006400"
    },
    {
      skillName: "Wordpress",
      skillIcon: <SiWordpress className={iconsClass} />,
      color: "#0073aa"
    },
  ],
  projects: [
    {
      title: "Project Lucky",
      description: "🐶 React application based on animal adoption.",
      tags: [
        "reactjs",
        "scss",
        "router-dom",
        "axios"
      ],
      link: "https://github.com/fernandoliva/project-lucky",
      live: "https://project-lucky.netlify.app/"
    },
    {
      title: "Project Lucky Backend",
      description: "🐱 Backend Code of Project Lucky.",
      tags: [
        "nodejs",
        "expressjs",
        "ECMAscript 6",
        "API"
      ],
      link: "https://github.com/fernandoliva/project-lucky-back"
    },
    {
      title: "Real State App",
      description: "🏠 web page in php based on real estate.",
      tags: [
        "website",
        "php",
        "scss",
        "ECMAScript 6"
      ],
      link: "https://github.com/fernandoliva/appInmobiliaria",
      live: "http://appinmo.fernandoliva.es/"
    },
    {
      title: "Rick and Morty Angular App",
      description: "👽 Rick and Morty based app on Angular.",
      tags: [
        "app",
        "angular",
        "scss",
        "Typescript"
      ],
      link: "https://github.com/fernandoliva/rickandmorty-angular",
      live: "http://rickandmortyapi.fernandoliva.es/"
    },
    {
      title: "Barber Shop App",
      description: "⚡ Barber Shop based app on php with cart.",
      tags: [
        "website",
        "php",
        "scss",
        "ECMAScript 6"
      ],
      link: "https://github.com/fernandoliva/appSalon",
      live: "http://appsalon.fernandoliva.es/"
    },
    {
      title: "Portfolio",
      description: "⚡ Portfolio page based on react and tailwind.",
      tags: [
        "website",
        "react",
        "tailwindCSS"
      ],
      link: "https://github.com/fernandoliva/portfolio",
      live: "https://portfolio.fernandoliva.es/"
    }
  ]
};
export default data;
