import React from 'react'
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import {
  DashboardOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

import styles from './styles.module.scss'
import SmallLogo from '../../assets/images/small_logo.png'
import Logo from '../../assets/images/logo_white.png'

const { Sider } = Layout;

class MenuLeft extends React.Component {

  render() {
    const { collapsed } = this.props
    return (
      <Sider className={styles.sideBarBackground} trigger={null} collapsible collapsed={collapsed}>
        <div className={styles.logo}>
          {collapsed ?
            <img src={SmallLogo} className={styles.smallLogo} alt="logo" /> :
            <img src={Logo} className={styles.Biglogo} alt="logo" />}
        </div>
        <Menu className={styles.sideBarBackground} mode="inline" defaultSelectedKeys={['1']}>

          <Menu.Item key="1" icon={<DashboardOutlined />}>
            <Link to="/">
              Dashboard
            </Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            <Link to="/create-booking">
              Create Booking
            </Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            <Link to="/">
              Shipments
            </Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<UserOutlined />}>
            <Link to="/">
              Orders
            </Link>
          </Menu.Item>
          <Menu.Item key="5" icon={<VideoCameraOutlined />}>
            <Link to="/">
              Integration
            </Link>
          </Menu.Item>
          <Menu.Item key="6" icon={<UploadOutlined />}>
            <Link to="/">
              Configurations
            </Link>
          </Menu.Item>
          <Menu.Item key="7" icon={<UserOutlined />}>
            <Link to="/">
              Guidelines
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

export default MenuLeft