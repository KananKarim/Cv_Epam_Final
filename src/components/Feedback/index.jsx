import React from "react";
import "./style.scss";

const Feedback = ({ data }) => {
  return (
    <>
      {data.map((item) => (
        <article key={item.id} className="feedback">
          <p className="feedback-text">{item.feedback}</p>
          <div className="feedback-user">
            <img
              src={item.reporter.photoUrl}
              width={35}
              alt={item.reporter.photoUrl}
            />
            <h6>
              {item.reporter.name},
              <a href={item.reporter.citeUrl}>{item.reporter.citeUrl}</a>
            </h6>
          </div>
        </article>
      ))}
    </>
  );
};

export default Feedback;
