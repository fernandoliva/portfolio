import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SkillCard = ({ skillName, skillIcon, skillColor }) => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  });
  return (
    <div className="mt-5 w-40 flex flex-col align-middle justify-center mx-auto text-center p-5 rounded-3xl border-2 border-gray-300" style={{ color: skillColor}} data-aos="fade-up" data-aos-duration="1500">
      {skillIcon}
      <p className="text-xl font-semibold mt-4 text-black">{skillName}</p>
    </div>
  );
};

export default SkillCard;
