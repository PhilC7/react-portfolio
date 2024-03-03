import React from 'react';
import Footer from '../Footer';
import Form from "../ContactForm"

function Contact() {
  return (
    <>
    <div className="container-fluid container my-5">
            <h2 className="contact-title text-center">Contact</h2>
    </div>
    <div className="container container-fluid d-flex flex-column justify-content-start">
      <div className="row">
        <div className="col-12 col-lg-6 mx-auto my-auto">
          <Form />
        </div>
        <div className="row mt-5">
          <div className="col-6 socials mx-auto d-flex justify-content-around">
          <a href="https://www.linkedin.com/in/philjcooper/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
          <a href="https://github.com/PhilC7" target="_blank"><i className="fa-brands fa-square-github"></i></a>
          <a href="#" target="_blank" className="icon-link"><i className="fa-solid fa-file"></i><span className="overlay-text">CV</span></a>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    
    </>
  )
}

export default Contact