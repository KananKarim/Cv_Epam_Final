import React from "react";
import Title from "../Title";
import EducationBody from "../EducationBody";
import "./style.scss";

const Education = () => {
  return (
    <section className="education" id="education">
      <Title text="Education" />
      <EducationBody />
    </section>
  );
};

export default Education;
