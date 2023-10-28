import React, { useState } from "react";
import Avatar from "../Avatar";
import Navigation from "../Navigation";
import "./style.scss";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import myImg from "../../assets/me.jpg";



const Panel = () => {
  const [openMenu, setOpenMenu] = useState(true);
  return (
    <>
      {openMenu && (
        <aside className="panel">
          <div className="panel-header">
            <img src={myImg}/>
            <h1>Kanan Karimli</h1>
          </div>
          <div className="panel-body">
            <Navigation />
            <Link to="/" className="panel-goback">
              <button>👈🏻 <span className="goback">Go back</span></button>
            </Link>
          </div>
        </aside>
      )}

      <AiOutlineMenu
        className="panel-menu"
        onClick={() => setOpenMenu((prev) => !prev)}
      />
    </>
  );
};

export default Panel;
