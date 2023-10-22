import React from "react";
import Title from "../Title";
import Expertize from "../Expertize";

const Experience = () => {
  const data = [
    {
      date: "2013",
      info: {
        company: "Google",
        job: "Front-end developer / php programmer",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor",
      },
    },
    {
      date: "2012",
      info: {
        company: "Twitter",
        job: "Web developer",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor",
      },
    },
  ];
  return (
    <section className="experience" id="experience">
      <Title text="Experience" />
      <Expertize data={data} />
    </section>
  );
};

export default Experience;
