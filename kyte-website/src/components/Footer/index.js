import React from 'react'
import { Input } from 'antd'
import Logo from '../../assets/images/logo_white.png'
import styles from './styles.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="row justify-content-center p-3">
        <div className="col-md-3">
          <img src={Logo} alt="logo" height="60" />
        </div>
        <div className="col-md-2">
          <ul>
            <li>FEATURES</li>
            <li>CUSTOMIZATIONS</li>
            <li>SOLUTIONS</li>
            <li>TRACK</li>
          </ul>
        </div>
        <div className="col-md-2">
          <ul>
            <li>ABOUT US</li>
            <li>CONTACT US</li>
            <li>LOGIN</li>
            <li>DEMO</li>
          </ul></div>
        <div className="col-md-3 ml-3">

          <p>
            <b>Head Office</b><br />
            <span>56/3 I, Kodandarama <br /> Temple Road, Hulimavu <br /> Main Road, Bannerghatta <br /> Road, Bangalore, <br /> Karnataka, India - 560076 <br /></span>

          </p>
          <div>
            <i class="fa fa-linkedin-square fa-2x mr-3" aria-hidden="true"></i>
            <i class="fa fa-facebook-square fa-2x" aria-hidden="true"></i>
          </div>
        </div>
      </div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-2">© 2020 CubiCom. All rights reserved.</div>
        <div className="col-md-5">
          <div className="d-flex">
            <span className="mr-3 mt-2">Subscribe with Us</span>
            <Input className={`${styles.customInput}`} placeholder="Enter your email" suffix="SEND" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer