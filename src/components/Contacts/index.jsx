import React from "react";
import Title from "../Title";
import { BsTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";

import ContactList from "../ContactList";

const Contacts = () => {
  return (
    <section className="contacts" id="contacts">
      <Title text="Contacts" />
      <ul className="contacts-form">
        <ContactList Icon={BsTelephoneFill} info="000 000 000" href="tel:+000000000" />
        <ContactList Icon={GrMail} info="office@kamsolutions.pl" href="mailto:office@kamsolutions.pl" />
        <ContactList
          Icon={AiFillInstagram}
          info="karimliikanan"
          small="https://www.instagram.com"
        />
        <ContactList
          Icon={FaFacebookF}
          info="Kenan Kerimli"
          small="https://www.facebook.com"
        />
        <ContactList
          Icon={BsDiscord}
          info="KananKarim"
          small="https://discord.com"
        />
      </ul>
    </section>
  );
};

export default Contacts;
