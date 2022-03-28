import React from 'react'
import './card.scss'

export const ArticleCard = (props) => {
  return (
    <article className='article-card'>
      { props.icon ?? '' }
      <h5>{props.title ?? ''}</h5>
      <small>{props.subTitle ?? ''}</small>
    </article>
  )
}
