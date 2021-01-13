import React, { useState } from 'react'
import NavBar from './navbar'
import styles from './styles.module.scss'



const Header = () => {
  const [text, setText] = useState('Shipping')
  const [number, setNumber] = useState(1)
  const textChange = (num) => {
    if (num === 1) {
      setText('Tracking')
      setNumber(2)
    }
    if (num === 2) {
      setNumber(3)
      setText('Cost Saving')
    }

    if (num === 3) {
      setNumber(1)
      setText('Shipping')
    }
  }
  return (
    <React.Fragment>
      <NavBar />
      <header className={styles.customBanner}>
        <div className="container h-100">
          <div className={`row h-100 ${styles.bannerContainer}`}>
            <div className="col-12 text-center">
              <span className={styles.heading} id="textchange" onClick={() => textChange(number)}>{text}</span>
              <span id="spinw"></span>
              <p className={`lead ${styles.leadText}`}>made easy for everyone!</p>
              <p className={styles.subText}>To get complete hands on and ease of doing logistics
              <br /><span className={styles.linkTag}>Click here</span> to know more!</p>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  )
}

export default Header