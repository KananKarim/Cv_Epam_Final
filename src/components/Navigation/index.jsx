import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { PiStudentFill } from "react-icons/pi";
import { BsFillPenFill } from "react-icons/bs";
import { BsBagFill } from "react-icons/bs";
import { BiLogoTelegram } from "react-icons/bi";
import { FaComment } from "react-icons/fa";
import { BsFillBoxFill } from "react-icons/bs";
import "./style.scss";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <a href="#about">
          <BsFillPersonFill />
          <span>About me</span>
        </a>
        <a href="#education">
          <PiStudentFill />
          <span>Education</span>
        </a>
        <a href="#experience">
          <BsFillPenFill />
          <span>Experience</span>
        </a>
        <a href="#skills">
          <BsFillBoxFill />
          <span>Skills</span>
        </a>
        <a href="#portfolio">
          <BsBagFill />
          <span>Portfolio</span>
        </a>
        <a href="#contacts">
          <BiLogoTelegram />
          <span>Contacts</span>
        </a>
        <a href="#feedbacks">
          <FaComment />
          <span>Feedbacks</span>
        </a>
      </ul>
    </nav>
  );
};

export default Navigation;
