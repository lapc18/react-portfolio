import React from 'react'
import './my-services.scss'
import { ServiceBlock } from './ServiceBlock'
import { FaLaptopCode } from 'react-icons/fa'
import { nanoid } from '@reduxjs/toolkit'


const services = [
  {
    id: nanoid(),
    icon: <FaLaptopCode />,
    title: 'Web Development',
    description: 'Better perfomance, faster technologies and responsive design applied in every solution.'
  },
  {
    id: nanoid(),
    icon: <FaLaptopCode />,
    title: 'Web Development',
    description: 'Better perfomance, faster technologies and responsive design applied in every solution.'
  },
  {
    id: nanoid(),
    icon: <FaLaptopCode />,
    title: 'Web Development',
    description: 'Better perfomance, faster technologies and responsive design applied in every solution.'
  },
  {
    id: nanoid(),
    icon: <FaLaptopCode />,
    title: 'Web Development',
    description: 'Better perfomance, faster technologies and responsive design applied in every solution.'
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
