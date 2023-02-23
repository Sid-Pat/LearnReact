import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'


export default function Navbar(props) {
  return (
    <>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    {/* <Link className="navbar-brand" to={'/'}>{props.title}</Link> */}
    <a className="navbar-brand" href=''>{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
        {/* <Link className="nav-link active" aria-current="page" to={'/'}>Home</Link> */}
        <a className="nav-link active" aria-current="page" href={'/'}>Home</a>
        </li>
        <li className="nav-item">
        {/* <Link className="nav-link" to={'/about'}>{props.aboutText}</Link> */}
        <a className="nav-link" href={'/about'}>{props.aboutText}</a>
        </li>
        <li className="nav-item">
          {/* <Link className="nav-link" to={'/contact'}>Contact</Link> */}
          <a className="nav-link" href={'/contact'}>Contact</a>
        </li>
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2 mx-5" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      </div>
      <div className="form-check form-switch mx-5 justify-content-end">
        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className={`form-check-label text-${props.mode==='dark'?"light":"dark"}`} htmlFor="flexSwitchCheckDefault">{(props.mode==='dark')?"Disable Dark":"Enable Dark"} Mode</label>
      </div>

    </div>
  {/* </div> */}
</nav>
    </>
  )
}

Navbar.propTypes = {
    title:PropTypes.string.isRequired,
    aboutText:PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title:'My Site',
    aboutText:'About'
}