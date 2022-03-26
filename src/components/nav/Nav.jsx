import React, { useState } from 'react'
import './nav.scss'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';


export const Nav = () => {
	const [activeNav, setActiveNav] = useState('home')

	return (
		<nav>
			<a href="#home" onClick={() => setActiveNav('home')} className={activeNav.includes('home') ? 'active' : ''}><AiOutlineHome /></a>
			<a href="#about" onClick={() => setActiveNav('about')} className={activeNav.includes('about') ? 'active' : ''}><AiOutlineUser /></a>
			<a href="#experience" onClick={() => setActiveNav('experience')} className={activeNav.includes('experience') ? 'active' : ''}><BiBook /></a>
			<a href="#services" onClick={() => setActiveNav('services')} className={activeNav.includes('services') ? 'active' : ''}><RiServiceLine /></a>
			<a href="#contact" onClick={() => setActiveNav('contact')} className={activeNav.includes('contact') ? 'active' : ''}><BiMessageSquareDetail /></a>
		</nav>
	)
}
