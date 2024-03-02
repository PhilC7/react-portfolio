import React from 'react'

function Footer() {
  return (
    <footer className="py-3">
        <div className="container d-flex justify-content-around align-items-center h-100">
            <h6><span>{"{P}"}</span> | Copyright © 2024</h6>
            <div className="socials-footer">
            <a href="https://www.linkedin.com/in/philjcooper/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                    <a href="https://github.com/PhilC7" target="_blank"><i className="fa-brands fa-square-github"></i></a>
            </div>
        </div>
      </footer>
  )
}

export default Footer