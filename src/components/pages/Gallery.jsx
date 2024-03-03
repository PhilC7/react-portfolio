import React, { useState } from 'react';
import Projects from './Projects';
import Footer from '../Footer';
import ProjectData from '../../projects.json'


function Gallery() {

  return (
      <>
        <div className="container-fluid container my-5">
            <h2 className="work-title text-center">Work</h2>
        </div>
        <div className="gallery container-fluid container px-0">
            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-3 g-4">
                {ProjectData.map((project) => (
                <Projects 
                key={project.id}
                id={project.id}
                name={project.name}
                image={project.image}
                description={project.description}
                deployed={project.deployed}
                repo={project.repo}
                />
                ))}
            </div>
        </div>
        <Footer />
    </>
  )
}

export default Gallery