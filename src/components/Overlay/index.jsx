import React from "react";

const Overlay = ({img,title,text,link}) => {
  return (
    <div className="image-overlay">
      <img src={img} alt={img} />
      <article className="image-text">
        <h5>{title}</h5>
        <p>
          {text}
        </p>
        <a href="#">{link}</a>
      </article>
    </div>
  );
};

export default Overlay;
