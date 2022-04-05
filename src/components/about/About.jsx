import React from 'react'
import './about.scss'
import ME from '../../assets/me-facedown.jpg'
import ArticleCard from '../card'
import { FaAward } from 'react-icons/fa';
import { IoBusiness } from 'react-icons/io5';
import { VscFolder } from 'react-icons/vsc';
import { nanoid } from '@reduxjs/toolkit';


const content = {
  description: 'Experienced Software Developer with a demonstrated history of working in the banking and business industries. Skilled in Public Speaking, Flutter, Java, DotNetCore, JavaScript and Typescript. Strong engineering professional graduated from ITLA and some certifications focused on development skills of ReactJS, Angular2+, Java Spring Boot, Flutter, C# DotNetCore and others.',
  items: [
    {
      id: nanoid(),
      title: 'Experience',
      subTitle: '+3 years',
      icon: <IoBusiness />
    },
    {
      id: nanoid(),
      title: 'Certifications',
      subTitle: '+18 completed',
      icon: <FaAward />
    },
    {
      id: nanoid(),
      title: 'Projects',
      subTitle: '+6 complted',
      icon: <VscFolder />
    },
  ]
}


export const About = () => {
  return (
    <section id='about'>
      <h5>Good to know</h5>
      <h2>About me</h2>
      <div className="container container__about">
        <div className="about__me">
          <img src={ME} alt="" />
        </div>
        <div className="about__content">
          <div className="about__cards">
            {content.items.map(x => (
              <ArticleCard key={x.id} title={x.title} subTitle={x.subTitle}  icon={x.icon} />
            ))}
          </div>
          <p>{content.description}</p>
          <a href="#contact" className='btn primary'>Let's talk</a>
        </div>
      </div>
    </section>
  )
}
