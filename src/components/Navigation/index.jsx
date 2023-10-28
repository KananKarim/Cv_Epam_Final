import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { PiStudentFill } from "react-icons/pi";
import { BsFillPenFill } from "react-icons/bs";
import { BsBagFill } from "react-icons/bs";
import { BiLogoTelegram } from "react-icons/bi";
import { FaComment } from "react-icons/fa";
import { BsFillBoxFill } from "react-icons/bs";
import "./style.scss";
import Link from "../Link";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <Link href="about" Icon={BsFillPersonFill} text="About me" />
        <Link href="education" Icon={PiStudentFill} text="Education" />
        <Link href="experience" Icon={BsFillPenFill} text="Experience" />
        <Link href="skills" Icon={BsFillBoxFill} text="Skills" />
        <Link href="portfolio" Icon={BsBagFill} text="Portfolio" />
        <Link href="contacts" Icon={BiLogoTelegram} text="Contacts" />
        <Link href="feedbacks" Icon={FaComment} text="Feedbacks" />
      </ul>
    </nav>
  );
};

export default Navigation;
