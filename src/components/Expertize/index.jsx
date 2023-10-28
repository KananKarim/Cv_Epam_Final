import React from "react";
import "./style.scss";

// change name
const Expertize = ({ data }) => {
  return (
    <>
      {data.map((item) => (
        <article key={item.date} className="expertize">
          <div className="expertize-left">
            <h5>{item.info.company}</h5>
            <time dateTime={item.date}>{item.date}</time>
          </div>
          <div className="expertize-right">
            <h5>{item.info.job}</h5>
            <p>{item.info.description}</p>
          </div>
        </article>
      ))}
    </>
  );
};

export default Expertize;
