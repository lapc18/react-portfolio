import React from "react";
import "./footer.scss";
import { BsGithub, BsInstagram, BsWhatsapp } from "react-icons/bs";

export const Footer = () => {
  return (
    <footer>
      <h2>Luis Adolfo Pimentel</h2>
      <div className="navigation">
        <a href="#home">Home</a>
        <a href="#about">About me</a>
        <a href="#experience">Experience</a>
        <a href="#services">Services</a>
        <a href="#contact">Contacts</a>
      </div>

      <div className="socials">
        <a
          href="https://github.com/lapc18"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub />
        </a>
        <a
          href="https://instagram.com/luispimentel.c"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsInstagram />
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=18293972288"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsWhatsapp />
        </a>
      </div>
      <div className="greets">
        <h3>All rights reserved ®</h3>
      </div>
    </footer>
  );
};
