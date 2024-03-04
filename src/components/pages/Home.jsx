import React from 'react';
import Footer from '../Footer';

function Home(props) {
  return (
    <>
    <section className="hero-section my-5 h-100">
      <div className="container-fluid container">
        <div className="row align-items-center">
          <div className="col-md-6">
            {/* Content for the left column */}
            <div className="left-column d-flex flex-column align-items-center h-100">
              <h1>I'm <span>Phil</span></h1>
              <p>Frontend Developer <span>|</span> Designer</p>
            </div>
          </div>
          <div className="col-md-6">
            {/* Content for the right column */}
            <div className="right-column text-center h-100">
              <img src="images/phil-main.png" alt="portrait of Phil" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer></Footer>
    </>
  )
}

export default Home