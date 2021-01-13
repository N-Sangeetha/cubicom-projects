import React from 'react'
import CustomerDelightImage from '../../assets/images/Customer_delight.mp4'
import styles from './styles.module.scss'

const Customerdelight = () => {
  return (
    <section className={styles.singleSection}>
      <div className={`container h-100 `}>
        <div className="col-12 text-center">
          <h2 className={styles.headingStyle}>Customer delight and Branding<div className={styles.underLine} /></h2>
          <p className="w-50 mx-auto">Receive real time Notifications at every stage. Build your brand through this platform - Use your own logo and branding</p>

          <video width="600" height="400" autoPlay muted loop>
            <source src={CustomerDelightImage} type="video/mp4">
            </source>
          </video>
        </div>
      </div>
    </section>
  )
}

export default Customerdelight
