import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { container, heading } from './card.module.css'


const Card = ({ cardTitle, cardData, cardImage, children }) => {
  return (
    <div className={container}>
      {/* <title>{cardTitle}</title> */}
        <h1 className={heading}>
          {cardTitle}
        </h1>
        <p> {cardData} </p>
        
        <StaticImage
            alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
            src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
            />
            
    </div>
  )
}


export default Card