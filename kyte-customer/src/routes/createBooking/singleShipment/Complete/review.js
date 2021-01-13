import React from 'react'
import { Card } from 'antd';
import DhlLogo from '../../../../assets/images/dhl.png'
import Footer from '../Footer'
import styles from './styles.module.scss'

const Review = () => {
  return (
    <React.Fragment>
      <div style={{ width: '100%', margin: '0 auto', }}>
        <Card style={{ borderRadius: '7px' }}>
          <div className={`row ${styles.addressContainer}`}>
            <div className="col-md-6">
              <h4>From Address:</h4>
              <p>Thomas Matthew Prolifc Cargo Services (M) Sdn Bhd, Bandar, CA, Petaling Jaya Selangor 46100 Malaysia</p>
            </div>
            <div className="col-md-6">
              <h4>To Address:</h4>
              <p>Noorhidwayati Tomrin Prolifc Cargo Services (M) Sdn Bhd, Bandar Sunway, CA, Petaling Jaya Selangor 46150 Malaysia</p>
            </div>
          </div>
        </Card>
        <div className="row d-xs-flex">
          <div className="col-md-2 col-sm-6 col-6">
            <div className="mt-3">
              <h4 className={styles.heads}>Shipment Details</h4>
              <p>Type: <span className="font-weight-bold">Pickup</span></p>
              <p>Total: <span className="font-weight-bold">10</span></p>
              <p>Kg: <span className="font-weight-bold">12.4</span></p>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-6">
            <div className="mt-3">
              <h4 className={styles.heads}>Preferred Courier</h4>
              <div className="d-md-flex">
                <div className={styles.logoBox2}>
                  <img src={DhlLogo} alt="logo" />
                </div>
                <div className="p-2" style={{ marginTop: 33 }}>Estimated Delivery Time:
              <span className="font-weight-bold ml-2">2020-08-08</span></div>
              </div>
              <div className="ml-4">
                <i className="fa fa-pencil" /><span className="ml-2">Edit</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer BtnText="Submit" />
    </React.Fragment>
  )
}

export default Review