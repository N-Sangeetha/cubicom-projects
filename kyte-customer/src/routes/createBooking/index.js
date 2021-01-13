import React, { Component } from 'react'
import { Tabs } from 'antd';
import SingleShipment from './singleShipment'
// import BannerImage from '../../assets/images/banner4.png'

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

class CreateBooking extends Component {
  render() {
    return (
      <div>
        <h5 className="mt-4 ml-2">Create Booking</h5>
        <Tabs defaultActiveKey="1" style={{ background: '', padding: '20px 10px' }} onChange={callback}>
          <TabPane tab="Single Shipment" key="1">
            <SingleShipment />
          </TabPane>
          <TabPane tab="Bulk Shipments" key="2">
            Content of Tab Pane 2
        </TabPane>
        </Tabs>
      </div>
    )
  }
}

export default CreateBooking