import React from 'react'
import './my-services.scss'

export const ServiceBlock = (props) => {
  return (
    <article className='service-block'>
        <div className="service-block__icon">
            { props?.icon || '' }
        </div>
        <div className="service-block__header">
            <h3>{ props?.title || '' }</h3>
        </div>
        <div className="service-block__content">
            <p>{ props?.description || '' }</p>
        </div>
    </article>
  )
}
