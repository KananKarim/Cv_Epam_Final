import React from "react";
import "./style.scss"


const Contact = ({Icon,info,small,href}) => {
  return (
    <div className="contacts-element">
        <Icon className="my-icon"/>
      <div className="contacts-desc">
        <li><a href={href}>{info}</a></li>
        <a href={small} target="_blank" className="contacts-http">{small}</a>
      </div>
    </div>
  );
};

export default Contact;
