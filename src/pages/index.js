import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import Cardholder from '../components/cardholder'

const IndexPage = ({data}) => {
    
    return (
      <Layout pageTitle="home">
        <h1>Welcome to my website!</h1> 
        <p>I'm making this by following some tutorials...</p>
      
      

        <Cardholder>

        </Cardholder>
        


      </Layout>

      

  )
}

export const query = graphql`
{
  allMdx(sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        title
				embeddedImagesLocal {
        	childImageSharp {
          	gatsbyImageData
        	}
      	}
      }
      body
      id
    }
  }
}

`




export default IndexPage