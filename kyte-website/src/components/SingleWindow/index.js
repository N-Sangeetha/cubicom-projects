import React from 'react'
import SingleVideo from '../../assets/images/single.mp4'
import styles from './styles.module.scss'

const SingleWindow = () => {
  return (
    <section className={styles.singleSection}>
      <div className={`container h-100 `}>
        <div className="col-12 text-center">
          <h2 className={styles.headingStyle}>Single window dashboard<div className={styles.underLine} /></h2>
          <p className="w-50 mx-auto">Effectively Choose, Manage and Monitor all your shipping partners through the single window dashboard</p>

          <video width="600" height="400" autoPlay muted loop>
            <source src={SingleVideo} type="video/mp4">
            </source>
          </video>
        </div>
      </div>
    </section>
  )
}

export default SingleWindow