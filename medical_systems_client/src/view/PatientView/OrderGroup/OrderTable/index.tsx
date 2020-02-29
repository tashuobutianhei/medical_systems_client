import React, { useState } from 'react'
import { Button, Checkbox, message } from 'antd';


import 'antd/dist/antd.css'
import './index.scss'

function Order (props: any) {
  // const [readStatus, setReadStauts] = useState<boolean>(false);

  const onclickButton = () => {
    // if (!readStatus) {
    //   message.error({
    //     content: '请确认阅读挂号协议',
    //     duration: 2
    //   })
    // } else {
    //   props.nextStep();
    // }
  }

  return (
    <div className="order-table">
        <p className="order-table-title">科室值班表</p>
        <div className="order-table-content">

        </div>
        <div className="order-table-footer">
          <Button type="primary" 
          className="order-table-footer-button" 
          onClick={onclickButton}>确认协议</Button>
        </div>
    </div>
  );
}

export default Order;