import React from "react";
import { FaGithub } from "react-icons/fa";
import { GoBroadcast } from "react-icons/go";

const ProjectCard = ({ project: { title, description, tags, link, live } }) => {
  return (
    <div className="max-w-3xl w-100 sm:w-1/2 m-4 mx-auto p-6 rounded-xl border-2 border-gray-300">
        <div className="flex flex-row items-center justify-between">
          <a href={link} target="_blank" rel="noopener noreferrer mx-2">
            <h1 className="text-lg md:text-xl font-bold pb-2">{title}</h1>
          </a>
          <div className="links flex flex-row items-center justify-space w-80">
            {link && (
              <a href={link}>
                <h1 className="text-2xl text-center font-bold">
                  <FaGithub className="inline align-baseline mx-2" loading="lazy" />
                </h1>
              </a>
            )}
            {live && (
              <a href={live}>
                <h1 className="text-2xl text-center font-bold animate-pulse text-green-800">
                  <GoBroadcast className="inline align-baseline" loading="lazy" />
                </h1>
              </a>
            )}
          </div>
        </div>
      <hr className="my-4" />
      <p className="">{description}</p>
      <div className="mt-12 mb-0 flex flex-wrap justify-center items-center gap-2">
        {tags.map((tag, i) => (
          <div className="px-4 py-1 border-2 rounded-full" key={i}>{tag}</div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
