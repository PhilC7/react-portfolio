import React from 'react'

function Header() {
  return (
    <nav className="navbar navbar-expand-lg d-flex" id="home">
      <div className="container-fluid container">
        <a className="navbar-brand" href="#home">{"{P}"}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Work</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header