import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ project: { title, description, tags, link } }) => {
  return (
    <div className="group w-full sm:w-1/2 m-4 mx-auto p-6 rounded-xl border-2 border-gray-300">
      <a href={link}>
        <h1 className="text-xl text-center font-bold">
          {title}{" "}
          <FaExternalLinkAlt className="inline align-baseline" />
        </h1>
      </a>
      <hr className="my-4" />
      <p className="">{description}</p>
      <div className="mt-4 mb-8 flex flex-wrap justify-center items-center gap-2">
        {tags.map((tag, i) => (
          <div className="px-4 py-1 border-2 rounded-full" key={i}>{tag}</div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
