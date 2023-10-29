import React from "react";
import Title from "../Title";
import { BsTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";

import Contact from "../Contact";

const Contacts = () => {
  return (
    <section className="contacts" id="contacts">
      <Title text="Contacts" />
      <ul className="contacts-form">
        <Contact Icon={BsTelephoneFill} info="000 000 000" href="tel:+000000000" />
        <Contact Icon={GrMail} info="office@kamsolutions.pl" href="mailto:office@kamsolutions.pl" />
        <Contact
          Icon={AiFillInstagram}
          info="karimliikanan"
          small="https://www.instagram.com"
        />
        <Contact
          Icon={FaFacebookF}
          info="Kenan Kerimli"
          small="https://www.facebook.com"
        />
        <Contact
          Icon={BsDiscord}
          info="KananKarim"
          small="https://discord.com"
        />
      </ul>
    </section>
  );
};

export default Contacts;
