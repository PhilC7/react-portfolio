import React from 'react'

function Home() {
  return (
    <section className="hero-section mt-5">
      <div className="container-fluid container">
        <div className="row align-items-center">
          <div className="col-md-6">
            {/* Content for the left column */}
            <div className="left-column d-flex flex-column align-items-center h-100 ms-5">
              <h1>I'm <span>Phil</span></h1>
              <p>Frontend Developer <span>|</span> Designer</p>
              <a href="#" target='blank'><button type="button" className="btn mt-2">Say Hi!</button></a>
            </div>
          </div>
          <div className="col-md-6">
            {/* Content for the right column */}
            <div className="right-column text-center">
              <img src="images/phil-main.png" alt="portrait of Phil" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home