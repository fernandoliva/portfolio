import React from "react";
import SkillCard from "./SkillCard";


function Skills({ skills }) {
  return (
    <div className="flex flex-row flex-wrap align-center justify-center max-w-xl mx-auto mt-8">
      {skills.map((skill,i) => {
        return (
            <SkillCard skillName={skill.skillName} skillIcon={skill.skillIcon} skillColor={skill.color} value={{color: skill.color}} key={i} skillDelay={i*100}/>
        );
      })}
    </div>
  );
}

export default Skills;