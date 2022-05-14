import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const AboutPage = () => {
    return (
       <Layout pageTitle="about"> 
            <h1>This is stuff about me!</h1>
            <p>Musician, instrument designer, etc..</p>
        
        
            <StaticImage
                alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
            />
            <p> after iamge </p>
      </Layout>
    )   
}

export default AboutPage