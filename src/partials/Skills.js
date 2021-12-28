import React from "react";
import SkillCard from "./SkillCard";

function Skills({ skills }) {
  return (
    <div className="grid md:grid-cols-3 xs:grid-cols-2 align-center justify-center max-w-2xl mx-auto mt-8">
      {skills.map((skill,i) => {
        return (
          <SkillCard skillName={skill.skillName} skillIcon={skill.skillIcon} skillColor={skill.color} value={{color: skill.color}} key={i} />
        );
      })}
    </div>
  );
}

export default Skills;
