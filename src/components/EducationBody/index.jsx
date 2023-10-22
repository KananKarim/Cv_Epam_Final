import React from "react";
import dateLine from "../../assets/dateLine.svg";
import "./style.scss";

const EducationBody = ({ data }) => {
  return (
    <>
      {data.map((item) => (
        <article key={item.date} className="education-body">
          <div className="education-body_date">
            <time dateTime={item.date}>{item.date}</time>
            <img src={dateLine} />
          </div>
          <div className="education-body_desc">
            <h4>{item.title}</h4>
            <p>{item.text}</p>
          </div>
        </article>
      ))}
    </>
  );
};

export default EducationBody;
