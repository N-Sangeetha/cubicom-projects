import React, { Component } from 'react';
import { Link } from 'react-router-dom'
// import LeftMenu from './LeftMenu'
// import RightMenu from './RightMenu'
import TopMenu from './TopMenu'
import { Drawer, Button, Menu, Layout } from 'antd';
import {
	UserOutlined
} from '@ant-design/icons';
import Logo from '../../assets/images/logo_white.png'
import styles from './styles.module.scss'

const { Header } = Layout;

class Navbar extends Component {
	state = {
		current: 'mail',
		visible: false
	}
	showDrawer = () => {
		this.setState({
			visible: true,
		});
	};

	onClose = () => {
		this.setState({
			visible: false,
		});
	};

	render() {
		return (
			<Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
				<div className={styles.logoBox}>
					<img src={Logo} className={styles.Biglogo} alt="logo" />
				</div>
				<Button className={styles.barsMenu} type="primary" onClick={this.showDrawer}>
					<span className={styles.barsBtn}></span>
				</Button>
				<div className={styles.logoContainer}><div className={styles.userLogo}><UserOutlined /></div></div>
				<TopMenu />
				<Drawer
					placement="right"
					closable={false}
					bodyStyle={{ backgroundColor: "#2e2c36", padding: "0" }}
					onClose={this.onClose}
					visible={this.state.visible}
				>
					<Menu theme="dark" className={styles.drawerMenu} defaultSelectedKeys={['1']}>
						<Menu.Item key="1"><Link to="/" className="text-white">Control Tower</Link></Menu.Item>
						<Menu.Item key="2"><Link to="/create-booking" className="text-white">Create Booking</Link></Menu.Item>
						<Menu.Item key="3"><Link to="/" className="text-white">Shipments</Link></Menu.Item>
						<Menu.Item key="4"><Link to="/" className="text-white">Orders</Link></Menu.Item>
						<Menu.Item key="5"><Link to="/" className="text-white">Integration</Link></Menu.Item>
						<Menu.Item key="6"><Link to="/" className="text-white">Configuration</Link></Menu.Item>
						<Menu.Item key="7"><Link to="/" className="text-white">Guidelines</Link></Menu.Item>
					</Menu>
				</Drawer>

			</Header>
		);
	}
}

export default Navbar;
