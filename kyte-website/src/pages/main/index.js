import React from 'react'
import Header from '../../components/Header'
import SingleWindow from '../../components/SingleWindow'
import MultipleVendor from '../../components/MultipleVendor'
import CostAndTime from '../../components/CostAndTime'
import Growth from '../../components/Growth'
import CustomerDelight from '../../components/CustomerDelight'
import MultipleDelivery from '../../components/MultipleDelivery'
import Footer from '../../components/Footer'
// import styles from './styles.module.scss'

const Main = () => {
  return (
    <div>
      <Header />
      <SingleWindow />
      <MultipleVendor />
      <CostAndTime />
      <Growth />
      <CustomerDelight />
      <MultipleDelivery />
      <Footer />
    </div>
  )
}

export default Main