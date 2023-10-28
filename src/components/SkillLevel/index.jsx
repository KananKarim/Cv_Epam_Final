import React from "react";
import "./style.scss"

const SkillLevel = () => {
  return (
    <div className="skills-level">
      <div className="skills-level_top">
        <div className="line"></div>
      </div>
      <div className="skills-level_bottom">
        <div className="beginner">beginner</div>
        <div className="proficient">proficient</div>
        <div className="expert">expert</div>
        <div className="master">master</div>
      </div>
    </div>
  );
};

export default SkillLevel;
