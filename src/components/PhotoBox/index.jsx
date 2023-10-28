import React from "react";
import "./style.scss";
import myImg from "../../assets/me.jpg";
import Avatar from "../Avatar";

const PhotoBox = ({ width, name, title, description }) => {
  return (
    <section className="photo-box">
      <Avatar width={width} />
      <h1>{name}</h1>
      <h2>{title}</h2>
      <p>{description}</p>
    </section>
  );
};

export default PhotoBox;
