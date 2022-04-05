import React from 'react'
import './my-services.scss'
import { ServiceBlock } from './ServiceBlock'
import { FaLaptopCode } from 'react-icons/fa'
import { AiOutlineMobile } from 'react-icons/ai'
import { MdOutlineManageAccounts } from 'react-icons/md'
import { BsChatSquareQuote } from 'react-icons/bs'
import { nanoid } from '@reduxjs/toolkit'


const services = [
  {
    id: nanoid(),
    icon: <FaLaptopCode />,
    title: 'Sofware Development',
    description: 'Better perfomance, faster technologies and responsive design applied in every solution.'
  },
  {
    id: nanoid(),
    icon: <AiOutlineMobile />,
    title: 'UI/UX Design',
    description: 'Modern designs with interactivity performing the best user experience.'
  },
  {
    id: nanoid(),
    icon: <MdOutlineManageAccounts />,
    title: 'Project Management',
    description: 'Determine the scope, manage and provide you the tools to develop your projects in the easiest way is always my first choice for you.'
  },
  {
    id: nanoid(),
    icon: <BsChatSquareQuote />,
    title: 'Consulting',
    description: 'Technologist dedicated to his passion available to provide you the best service experiences at your disposal anytime, anywhere.'
  },
]

export const MyServices = () => {
  return (
    <section id='services'>
      <h5>Develop all you need with</h5>
      <h2>My Services</h2>
      <div className="container container__services">
        { services.map(x => (
          <div className='container__services__item' key={x.id}>
            <ServiceBlock  {...x} />
          </div>
        )) }
      </div>
    </section>
  )
}
