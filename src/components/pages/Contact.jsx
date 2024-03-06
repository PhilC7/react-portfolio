import React from 'react';
import Footer from '../Footer';
import Form from "../ContactForm"

function Contact() {
  return (
    <>

      <div className="container-fluid container my-5">
              <h2 className="contact-title text-center">Contact</h2>
      </div>
      <div className="container container-fluid">
        <div className="row">
          <div className="col-12 col-lg-8 mx-auto my-auto">
            <Form />
          </div>
        </div>
          </div>
          <div className="row mt-5">
            <div className="col-6 socials mx-auto d-flex justify-content-around">
            <a href="https://www.linkedin.com/in/philjcooper/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
            <a href="https://github.com/PhilC7" target="_blank"><i className="fa-brands fa-square-github"></i></a>
            <a href="dist/phil-cooper-cv.pdf" target="_blank" className="icon-link"><i className="fa-solid fa-file"></i><span className="overlay-text">CV</span></a>
            </div>
      </div>

    <Footer />
    
    </>
  )
}

export default Contact