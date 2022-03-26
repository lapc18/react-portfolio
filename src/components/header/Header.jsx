import React from 'react'
import './header.scss'
import { BsGithub, BsInstagram, BsWhatsapp } from 'react-icons/bs';
import ME from '../../assets/me.jpg'

export const Header = () => {
  return (
    <header id='home'>
      <div className="container container__header">
        <h5>Welcome!</h5>
        <h1>This is Adolfo</h1>
        <h5 className='text-light'>Software Developer</h5>
        <div className="actions">
          <a className='btn' href="#">Download CV</a>
          <a className='btn primary' href="#contact">Let's talk</a>
        </div>
        <div className="me">
          <img src={ME} alt="" />
        </div>
        <div className="socials">
          <a href="#" target="_blank" rel="noopener noreferrer"><BsGithub /></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><BsInstagram /></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><BsWhatsapp /></a>
        </div>
        <div className="scroll__down">
          <h4>Scroll down</h4>
        </div>
      </div>
    </header>
  )
}
