import React from 'react';
import Footer from '../Footer';


function About() {
  return (
    <>
        <div className="container-fluid container my-5">
            <h2 className="work-title text-center">About</h2>
        </div>
    <div className="about container-fluid container d-flex flex-column">
        <div className="gallery container-fluid container px-0">
            <div className="w-75 mx-auto">
            <p>Currently working through a bootcamp on frontend development. I also have a background in graphic design so naturally I'd like to expand on that and venture into UX/UI as well as gain a career in frontend development. Over the years I've had a keen interest in coding and development. With the hope to contribute in creating beautifully crafted websites to the online world.
            </p>
            <p>
            Throughout this bootcamp I hav gained valuable knowledge of following programs and skills. HTML, CSS, JavaScript, Bootstrap, React, JQuery, JSON, JSX, Git & GitHub. My aim is to develop these further to gain a career as a developer.
            </p>
            </div>
          </div>
          <div className='mt-5'>

          <h3 className="skills-title text-center mb-5">Skills</h3>
          <div class="skills row mx-auto justify-items-center w-75">
        <div class="col-6 col-md-3 col-sm-4 mb-5 d-flex justify-content-center align-items-center">
            <i className="fa-brands fa-html5 skill-icon"></i>
        </div>
        <div class="col-6 col-md-3 col-sm-4 mb-5 d-flex justify-content-center align-items-center">
            <i className="fa-brands fa-css3-alt skill-icon"></i>
        </div>
        <div class="col-6 col-md-3 col-sm-4 mb-5 d-flex justify-content-center align-items-center">
            <i className="fa-brands fa-js skill-icon"></i>
        </div>
        <div class="col-6 col-md-3 col-sm-4 mb-5 d-flex justify-content-center align-items-center">
            <i className="fa-brands fa-bootstrap skill-icon"></i>
        </div>
        <div class="col-6 col-md-3 col-sm-4 mb-5 d-flex justify-content-center align-items-center">
            <i className="fa-brands fa-react skill-icon"></i>
        </div>
        <div class="col-6 col-md-3 col-sm-4 mb-5 d-flex justify-content-center align-items-center">
            <i className="fa-brands fa-node-js skill-icon"></i>
        </div>
        <div class="col-6 col-md-3 col-sm-4 mb-5 d-flex justify-content-center align-items-center">
            <i className="fa-brands fa-git-alt skill-icon"></i>
        </div>
        <div class="col-6 col-md-3 col-sm-4 mb-5 d-flex justify-content-center align-items-center">
            <i className="fa-brands fa-square-github skill-icon"></i>
        </div>
    </div>
          </div>
    </div>
    <Footer />
    </>
  )
}

export default About