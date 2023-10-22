import React from "react";
import myImg from "../../assets/me.jpg";
import "./style.scss";

const Avatar = ({ width }) => {
  return (
    <div className="avatar">
      <img src={myImg} style={{ width: width }} />
    </div>
  );
};

export default Avatar;
