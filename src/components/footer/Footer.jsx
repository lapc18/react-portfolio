import React from "react";
import "./footer.scss";
import { BsGithub, BsInstagram, BsWhatsapp } from "react-icons/bs";

export const Footer = () => {
  return (
    <footer>
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
