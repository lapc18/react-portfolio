import React from 'react'
import './about.scss'
import ME from '../../assets/me-facedown.jpg'
import ArticleCard from '../card'
import { FaAward } from 'react-icons/fa';
import { IoBusiness } from 'react-icons/io5';
import { VscFolder } from 'react-icons/vsc';


const content = {
  description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia accusantium tempore dolorem quis ratione quam consectetur non. Illo modi laboriosam aperiam culpa. Nemo minus quaerat consectetur quo mollitia consequuntur accusantium?',
  items: [
    {
      title: 'Experience',
      subTitle: '+3 years',
      icon: <IoBusiness />
    },
    {
      title: 'Certifications',
      subTitle: '+18 completed',
      icon: <FaAward />
    },
    {
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
              <ArticleCard title={x.title} subTitle={x.subTitle}  icon={x.icon} />
            ))}
          </div>
          <p>{content.description}</p>
          <a href="#contact" className='btn primary'>Let's talk</a>
        </div>
      </div>
    </section>
  )
}
