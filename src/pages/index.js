import * as React from "react"
import Layout from '../components/layout'
import Cardholder from '../components/cardholder'

const IndexPage = () => {
    return (
        <Layout pageTitle="home">
          <h1>Welcome to my website!</h1> 
          <p>I'm making this by following some tutorials...</p>
        
        
          <Cardholder></Cardholder>
          


        </Layout>

        

    )
}


export default IndexPage