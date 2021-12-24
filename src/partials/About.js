import React from "react";

function About({ title, description }) {
  return (
    <div className="max-w-4xl mx-auto mt-16">
      <p className="text-2xl md:text-4xl font-bold text-center">{title}</p>
      {description.map((item, index) => (
        <p key={index} className="text-base text-left md:text-center text-gray-600 leading-relaxed mt-4">
          {item}
        </p>
      ))}
    </div>
  );
}

export default About;
