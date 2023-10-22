import React from "react";
import "./style.scss";
import PhotoBox from "../../components/PhotoBox";
import { Link } from "react-router-dom";
import Button from "../../components/Button"

const Start = () => {
  return (
    <main className="start">
      <PhotoBox
        width={133}
        name="Karimli Kanan"
        title="Full-Stack Developer.Creative.Programmer"
        description="I'm a full-stack developer who possesses skills and expertise in both front-end and back-end web development."
      />
      <Link to="/inner">
        <Button text="Know More" />
      </Link>
    </main>
  );
};

export default Start;
