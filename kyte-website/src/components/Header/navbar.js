import React from 'react'
import { Link } from 'react-router-dom'
import Flag from '../../assets/images/flag.png'
import Logo from '../../assets/images/logo_white.png'
import Global from '../../assets/images/global.svg'
import styles from './styles.module.scss'

const NavBar = () => {
  return (
    <React.Fragment>
      <nav className={`navbar navbar-expand-md fixed-top ${styles.customNavbar}`}>
        <span className="navbar-brand">
          <img src={Logo} alt="logo" height='40px' />
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fa fa-bars text-white"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className={`navbar-nav mr-auto pl-4 ${styles.listStyle}`}>
            <li className="nav-item active">
              <span className="nav-link">Features<span className="sr-only">(current)</span></span>
            </li>
            <li className="nav-item">
              <span className="nav-link">Customization</span>
            </li>
            <li className="nav-item">
              <span className="nav-link">Pricing</span>
            </li>
            <li className="nav-item">
              <span className="nav-link">About Us</span>
            </li>
            <li className="nav-item">
              <span className="nav-link">Contact Us</span>
            </li>
          </ul>
          <div className={`ml-auto d-flex justify-content-around ${styles.BtnSection}`}>
            <button type="submit" className={`btn ${styles.customButton} mr-2`}>
              <i className="fa fa-map-marker d-none d-md-inline-block pr-2" />Track</button>
            <Link to="/login" ><button type="submit" className={`btn ${styles.customButton} mr-2`}>
              Login</button></Link>
            <Link to='/signup'><button type="submit" className={`btn ${styles.customButton} mr-4`}>
              Sign Up</button></Link>
            <div className="align-self-center mr-4 dropdown show">
              <span className="dropdown-toggle" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img src={Flag} alt="flag" />
              </span>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <span className="dropdown-item"><img src={Flag} alt="flag" width="30" /><span className="ml-2" >Malaysia</span></span>
                <span className="dropdown-item"><img src={Flag} alt="flag" width="30" /><span className="ml-2" >India</span></span>
              </div>
            </div>
            <span className="align-self-center mr-2"><img src={Global} className="mr-2" alt="global" />En</span>
          </div>
        </div>
      </nav>
    </React.Fragment>
  )
}

export default NavBar