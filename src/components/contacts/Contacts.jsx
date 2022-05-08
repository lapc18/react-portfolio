import { nanoid } from "@reduxjs/toolkit";
import React from "react";
import { BsInstagram, BsWhatsapp } from "react-icons/bs"
import { FiMail } from "react-icons/fi"
import ArticleCard from "../card";
import "./contacts.scss";


const content = [
  {
    id: nanoid(),
    title: 'WhatsApp',
    subTitle: '+1 829 397 2288',
    icon: <BsWhatsapp />,
    onClick: () => window.open('https://wa.me/18293972288', '_blank')
  },
  {
    id: nanoid(),
    title: 'Instagram',
    subTitle: '@luispimentel.c',
    icon: <BsInstagram />,
    onClick: () => window.open('https://instagram.com/luispimentel.c', '_blank')
  },
  {
    id: nanoid(),
    title: 'e-Mail',
    subTitle: 'lapc18@outlook.com',
    icon: <FiMail />,
    onClick: () => window.open('mailto:lapc18@outlook.com', '_blank')
  },
];

export const Contacts = (props) => {
  return (
    <section id="contact">
      <h5>Best wasys to</h5>
      <h2>Contact me</h2>
      <div className="container container__contact">
        <div className="container__contact__cards">
          {content.map((x) => (
            <ArticleCard key={x.id} {...x} />
          ))}
        </div>
      </div>
    </section>
  );
};
