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
        <div className="col-6 mx-auto">
          <Form />
        </div>

      </div>
    </div>
    <Footer />
    </>
  )
}

export default Contact