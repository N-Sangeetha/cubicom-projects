import React, { Component } from 'react'
import { Layout } from 'antd';
import styles from './styles.module.scss'
import MenuTop from '../MenuTop'
const { Footer, Content } = Layout;

class Applayout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: false,
    }
  }

  toggle = () => {
    const { collapsed } = this.state
    this.setState({ collapsed: !collapsed })
  };

  render() {
    // const { collapsed } = this.state
    const { children } = this.props
    return (
      <Layout className={styles.fullHeight}>

        {/* <MenuLeft collapsed={collapsed} /> */}
        <Layout className={styles.siteLayout}>
          <MenuTop />
          {/* React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: `${styles.trigger}`,
            onClick: toggle,
          }) */}


          {/* <nav class="navbar navbar-dark bg-dark navbar-expand-sm">
            <a class="navbar-brand" href="#">
              <img src={Logo} className={styles.Biglogo} height="40" alt="logo" />
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-list-2" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbar-list-2">
              <ul class={`navbar-nav ml-auto ${styles.topNavBar}`}>
                <li class={`nav-item mt-2 ${styles.active}`} onClick={this.handleLinkChange}>
                  <Link to="/" ><a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a></Link>
                </li>
                <li class="nav-item mt-2" onClick={this.handleLinkChange}>
                  <Link to="/create-booking" ><a class="nav-link" href="#">Create Booking</a></Link>
                </li>
                <li class="nav-item mt-2">
                  <Link to="/" ><a class="nav-link" href="#">Shipemnts</a></Link>
                </li>
                <li class="nav-item mt-2">
                  <Link to="/" ><a class="nav-link" href="#">Orders</a></Link>
                </li>
                <li class="nav-item mt-2">
                  <Link to="/" ><a class="nav-link" href="#">Integrations</a></Link>
                </li>
                <li class="nav-item mt-2">
                  <Link to="/" ><a class="nav-link" href="#">Configurations</a></Link>
                </li>
                <li class="nav-item mt-2">
                  <Link to="/" ><a class="nav-link" href="#">Guidelines</a></Link>
                </li>
              </ul>
            </div>
      </nav> */}
          <Content className={styles.siteLayout} style={{ marginTop: 50 }}>
            <div className={styles.siteLayoutDiv} style={{ padding: 25, minHeight: '100vh' }}>
              {children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}> 2020 © Cubicom. All rights reserved.</Footer>
        </Layout>
      </Layout >

    )
  }
}

export default Applayout