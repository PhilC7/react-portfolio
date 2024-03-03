import React from 'react'

function Footer() {
  return (
    <footer className="py-5">
        <div className="container d-flex justify-content-center align-items-center h-100">
            <h6 className='mx-5 my-auto'>&copy; <span>{"{P}"}</span> | Phil Cooper 2024</h6>
            <div className="socials-footer">
            <a href="https://www.linkedin.com/in/philjcooper/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                    <a href="https://github.com/PhilC7" target="_blank"><i className="fa-brands fa-square-github"></i></a>
            </div>
        </div>
      </footer>
  )
}

export default Footer