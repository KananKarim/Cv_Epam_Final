import React, { useState } from "react";
import Title from "../Title";
import Skill from "../Skill";
import Button from "../Button";
import "./style.scss";
import Myform from "../Form";
import SkillLevel from "../SkillLevel";

const Skills = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <section className="skills" id="skills">
      <div className="skills-top">
        <Title text="Skills" />
        <Button
          sign={"🖊️"}
          text="Open Edit"
          onClick={() => setShowForm((prev) => !prev)}
        />
      </div>
      {showForm && <Myform />}
      <Skill />
      <SkillLevel />
    </section>
  );
};

export default Skills;
