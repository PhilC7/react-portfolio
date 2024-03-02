import React from 'react'

function Projects(props) {

  return (
    <>
    <div className="col">
        <div className="card project rounded-5 mx-auto">
            <img src={props.image} className="card-img rounded-4" alt={props.name} />
            <div className="card-img-overlay rounded-4 p-4 mx-0">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.description} </p>
                <a href={props.deployed} target='blank'><button type="button" className="btn project-btn mt-2">Deployed Site</button></a>
            
                <a href={props.repo} target='blank'><button type="button" className="btn project-btn mt-2">GitHub Page</button></a>
            </div>
        </div>  
    </div>  
    </>
  )
}

export default Projects