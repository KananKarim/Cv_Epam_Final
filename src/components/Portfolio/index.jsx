import React, { useState } from "react";
import Title from "../Title";
import portfolio1 from "../../assets/card_3.png";
import portfolio2 from "../../assets/Portfolio-cards.png";
import "./style.scss";
import Overlay from "../Overlay";


const Portfolio = () => {
  const [selectedTab, setSelectedTab] = useState('all');

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <section className="portfolio" id="portfolio">
      <Title text="Portfolio" />
      <ul className="portfolio-tabs">
        <li className={`${selectedTab === "all" ? "active" : ""}`} onClick={() => handleTabClick('all')}>All /</li>
        <li className={`${selectedTab === "code" ? "active" : ""}`} onClick={() => handleTabClick('code')}>&nbsp;Code /</li>
        <li className={`${selectedTab === "ui" ? "active" : ""}`} onClick={() => handleTabClick('ui')}>&nbsp;UI</li>
      </ul>

      <div className="portfolio-content">
        {(selectedTab === 'all' || selectedTab === 'ui') && (
          <Overlay
            img={portfolio1}
            text="I value collaboration and have experience working in Agile teams, ensuring that development processes are transparent."
            link="View resource"
            title="some text"
          />
        )}
        {(selectedTab === 'code' || selectedTab === 'all') && (
          <Overlay
            img={portfolio2}
            text="I value collaboration and have experience working in Agile teams, ensuring that development processes are transparent."
            link="View resource"
            title="some text"
          />
        )}
        {(selectedTab === 'all' || selectedTab === 'ui') && (
          <Overlay
            img={portfolio1}
            text="I value collaboration and have experience working in Agile teams, ensuring that development processes are transparent."
            link="View resource"
            title="some text"
          />
        )}
      </div>
    </section>
  );
};

export default Portfolio;

