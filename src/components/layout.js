import * as React from 'react'
import { Link } from 'gatsby'
import { container, heading, navLinks, navLinkItem, navLinkText } from './layout.module.css'
import Card from '../components/card'


const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <title>{pageTitle}</title>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}> 
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
            </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>
          {pageTitle}
        </h1>
        {/* <Card cardTitle="Card1">
            // cardData="this is the data for card 1" 
            // cardImage="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large">
            </Card> */}

        {children}
      </main>
    </div>
  )
}


export default Layout