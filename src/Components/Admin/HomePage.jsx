import React from 'react'
import './../../assets/styles/homepage.css'
const HomePage = () => {
  return (
    <>
      <div className="homepage">
        <div className="container">
          <div className="lefttext">
            {/* <h1>
                  A library is a gateway to knowledge, imagination, and endless discovery.
                  </h1> */}
            <h1>
              A library isn’t just a place for books -
              It’s a home for thinkers, dreamers, and explorers.
              Every page holds a possibility,
              Every visit begins a new journey.
            </h1>
          </div>
          <div className="righttext">
            <h1>
              Powered by stories. Backed by knowledge.
              Your personal database of curiosity.
              Log in, search deep, and never stop exploring.
              The library, reimagined for the digital age.
            </h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
