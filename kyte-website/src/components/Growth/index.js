import React from 'react'
import GrowthVideo from '../../assets/images/growth.mp4'
import styles from './styles.module.scss'

const Growth = () => {
  return (
    <section className={styles.singleSection}>
      <div className={`container h-100 `}>
        <div className="col-12 text-center">
          <h2 className={styles.headingStyle}>Increased reach<div className={styles.underLine} /></h2>
          <p className="w-50 mx-auto">Limitless shipping with maximum reach at nominal cost</p>

          <video width="600" height="400" autoPlay muted loop>
            <source src={GrowthVideo} type="video/mp4">
            </source>
          </video>
        </div>
      </div>
    </section>
  )
}

export default Growth
