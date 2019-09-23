import React from 'react'
import {NavLink} from 'react-router-dom'
const Navbar = props => {
  return(
    <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
    <div className="container">
      <a className="navbar-brand" href="/"><i className="flaticon-university" />Genius <br /><small>University</small></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="oi oi-menu" /> Menu
      </button>
      <div className="collapse navbar-collapse" id="ftco-nav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active"><NavLink to = '/' className="nav-link">Home</NavLink></li>
          <li className="nav-item"><NavLink to = '/' className="nav-link">About</NavLink></li>
          <li className="nav-item"><NavLink to = '/khoahoc' className="nav-link">Courses</NavLink></li>
          <li className="nav-item"><NavLink to = '/' className="nav-link">Teacher</NavLink></li>
          <li className="nav-item"><NavLink to = '/'  className="nav-link">Blog</NavLink></li>
          <li className="nav-item"><NavLink to = '/' className="nav-link">Events</NavLink></li>
          <li className="nav-item"><NavLink to = '/' className="nav-link">Contact</NavLink></li>
          <li className="nav-item cta"><NavLink  className="nav-link"><span>Apply Now!</span></NavLink></li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar