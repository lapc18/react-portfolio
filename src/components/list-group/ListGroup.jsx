import React from 'react'
import './list-group.scss'
import { MdVerified } from 'react-icons/md';

export const ListGroup = (props) => {
  return (
    <article className='list-group'>
      <div className='list-group__title'>
        {props.icon ?? ''}
        <h2>{props.title ?? ''}</h2>
      </div>
      <div className='list-group__container'>
        {
          props.items.map(x => (
            <div className='list-group__container__content' key={`${x.id}-${x.name}-${x.category}`}>
              <MdVerified />
              <div>
                <h2>{x.name}</h2>
                <h5>{x.category}</h5>
              </div>
            </div>
          )) ?? ''
        }
        <small>{props.subTitle ?? ''}</small>
      </div>
    </article>
  )
}
