import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { container, heading } from './card.module.css'


const Card = ({ cardTitle, cardData, cardImage, cardLink, children }) => {
  return (
    <div className={container}>
        <h1 className={heading}>
          {cardTitle}
        </h1>
        <p> {cardData} </p>
        
        <GatsbyImage
            alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
            src={cardImage}
            />
            
    </div>
  )
}


export default Card