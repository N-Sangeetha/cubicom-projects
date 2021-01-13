import React from 'react'
import { Input } from 'antd'
import {
  SearchOutlined
} from '@ant-design/icons';
import styles from './styles.module.scss'

// const { Search } = Input;

const FloatSearch = () => {
  return (
    <Input
      className={styles.floatSearch}
      placeholder="input search text"
      onChange={value => console.log(value)}
      suffix={
        <SearchOutlined />
      } />
  )
}

export default FloatSearch