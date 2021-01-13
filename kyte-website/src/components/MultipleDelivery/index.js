import React from 'react'
import AnimatedVideo from '../../assets/images/multiple_delivery option.mp4'
import styles from './styles.module.scss'

const MultipleDelivery = () => {
  return (
    <section className={styles.singleSection}>
      <div className={`container h-100 `}>
        <div className="col-12 text-center">
          <h2 className={styles.headingStyle}>Multiple vendor option <div className={styles.underLine} /></h2>
          <p className="w-50 mx-auto">With Courier Connect your shipping becomes easy and transparent , choose your preferred logistics partners by click of a button</p>

          <video width="600" height="400" autoPlay muted loop>
            <source src={AnimatedVideo} type="video/mp4">
            </source>
          </video>
        </div>
      </div>
    </section>
  )
}

export default MultipleDelivery
