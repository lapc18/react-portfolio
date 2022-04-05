import React from 'react'
import EXPERIENCE_CAT from '../../models'
import ListGroup from '../list-group'
import './experience.scss'

export const Experience = () => {

  const EXPERIENCE = [...EXPERIENCE_CAT]

  return (
    <section id='experience'>
      <h5>Skills I manage with</h5>
      <h2>Experience</h2>
      <div className="container container__experience">
        {
          EXPERIENCE.map(x => (
            <ListGroup key={x.id} {...x} />
          ))
        }
      </div>
    </section>
  )
}
