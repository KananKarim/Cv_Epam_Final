import React from "react";
import "./style.scss";
import Panel from "../../components/Panel";
import About from "../../components/About";
import Education from "../../components/Education";
import Experience from "../../components/Experience";
import Skills from "../../components/Skills";
import Portfolio from "../../components/Portfolio";
import Contacts from "../../components/Contacts";
import Feedbacks from "../../components/Feedbacks";

const Inner = () => {
  return (
    <div className="inner">
      <Panel />
      <main className="inner-main">
        <About />
        <Education />
        <Experience />
        {/* <Skills /> */}
        <Portfolio />
        <Contacts />
        <Feedbacks />
        <a href="#about" className="go-up">
          <button>👆🏻</button>
        </a>
      </main>
    </div>
  );
};

export default Inner;
