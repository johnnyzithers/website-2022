import * as React from 'react'
import { container, heading } from './cardholder.module.css'
import Card from '../components/card'


const Cardholder = () => {
  return (
    <div className={container}>
  
          <Card cardTitle="Card1" cardData="this is the data for card 1" cardImage="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"></Card>
          <Card cardTitle="Card2" cardData="this is the data for card 2" cardImage="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"></Card>

          <Card cardTitle="Card3" cardData="this is the data for card 3" cardImage="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"></Card>
          <Card cardTitle="Card4" cardData="this is the data for card 4" cardImage="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"></Card>


    </div>
  )
}


export default Cardholder