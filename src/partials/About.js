import React from "react";
import bgImage from "./../images/aboutme__bg2.webp";

function About({ title, description }) {
  const parallax = {
    backgroundImage: `url(${bgImage})`,
  }
  return (
    // <section className="container flex items-center justify-center h-fit my-20 p-10 bg-fixed bg-center bg-cover custom-img mx-auto rounded-xl max-w-4xl md:mx-auto text-2xl text-slate-700" style={parallax}>
    //     <div className="">
    //       <div className="about"  />
    //       <p className="text-2xl md:text-4xl font-bold text-center">{title}</p>
    //       {description.map((item, index) => (
    //         <p key={index} className="text-base text-justify md:text-center text-slate-600 leading-relaxed mt-4">
    //           {item}
    //         </p>
    //       ))}
    // </div>
    // </section>
    <section className="flex items-center justify-center h-fit my-20 p-10 bg-fixed bg-contain bg-left-top custom-img mx-auto rounded-xl max-w-3xl md:mx-auto text-2xl text-slate-700" loading="lazy" style={parallax}>
      <div>
          <p className="text-2xl text-white md:text-4xl font-bold text-center">{title}</p>
          {description.map((item, index) => (
            <p key={index} className="text-base text-white text-justify md:text-center text-slate-600 leading-6 my-2 w-10/12 mx-auto">
              {item}
            </p>
          ))}

      </div>
    </section>
  );
}

export default About;
