import React, { Component } from 'react'
import { Button } from 'antd'

class Footer extends Component {
  render() {
    const { BtnText, buttonHandler, cancleHandler } = this.props
    return (
      <div className="mt-4 px-3">
        <div className="d-flex justify-content-between">
          <Button type="text" style={{ borderRadius: 20 }}>Back</Button>
          <div>
            <Button type="text" style={{ marginRight: 10, borderRadius: 20 }} onClick={cancleHandler}>Cancel</Button>
            <Button type="primary" style={{ borderRadius: 20 }} onClick={buttonHandler}>{BtnText}</Button>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer