import React from "react";

const SkillCard = ({ skillName, skillIcon, skillColor }) => {
  return (
    <div className="mt-5 w-40 flex flex-col align-middle justify-center mx-auto text-center p-5 rounded-xl border-2 border-gray-300" style={{ color: skillColor}}>
      {skillIcon}
      <p className="text-xl font-semibold mt-4 text-black">{skillName}</p>
    </div>
  );
};

export default SkillCard;
