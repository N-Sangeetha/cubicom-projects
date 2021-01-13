import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

import styles from './styles.module.scss'

class TopMenu extends Component {
  render() {
    return (
      <Menu theme="dark" className={styles.topBar} mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1"><Link to="/" className="text-white" >Control Tower</Link></Menu.Item>
        <Menu.Item key="2"><Link to="/create-booking" className="text-white">Create Booking</Link></Menu.Item>
        <Menu.Item key="3"><Link to="/" className="text-white" >Shipments</Link></Menu.Item>
        <Menu.Item key="4"><Link to="/" className="text-white" >Orders</Link></Menu.Item>
        <Menu.Item key="5"><Link to="/" className="text-white" >Integration</Link></Menu.Item>
        <Menu.Item key="6"><Link to="/" className="text-white" >Configuration</Link></Menu.Item>
        <Menu.Item key="7"><Link to="/" className="text-white" >Guidelines</Link></Menu.Item>
      </Menu>
    )
  }
}

export default TopMenu