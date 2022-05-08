import React from 'react'
import './home.scss'

import Header from '../../components/header'
import Nav from '../../components/nav'
import About from '../../components/about'
import Experience from '../../components/experience'
import MyServices from '../../components/my-services'
// import Projects from '../../components/projects'
// import Contacts from '../../components/contacts'
import Footer from '../../components/footer'

export const Home = () => {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Experience />
        <MyServices />
        
        <Footer /> 
        
        {/* 
        <Projects />
        <Contacts />
        */}
    </>
  )
}
