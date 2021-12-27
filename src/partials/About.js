import React from "react";

function About({ title, description }) {
  return (
    <div className="max-w-4xl md:mx-auto mx-8 mt-16">
      <p className="text-2xl md:text-4xl font-bold text-center">{title}</p>
      {description.map((item, index) => (
        <p key={index} className="text-base text-justify md:text-center text-gray-600 leading-relaxed mt-4">
          {item}
        </p>
      ))}
    </div>
  );
}

export default About;
