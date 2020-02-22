import React from 'react'
// import { Layout, Menu, Avatar, BackTop, Dropdown, Icon } from 'antd';
import HomeEnterCrad from '../../component/HomeEnterCrad'

import 'antd/dist/antd.css'
import './index.scss'

type Props = {
  color: string
  imgUrl: string
  enterText: string
  textColor: string
}

const homeList: Props[] = [{
  color: '#62999d',
  imgUrl: 'patient',
  enterText: '患者端',
  textColor: 'white'
}, {
  color: '#dac594',
  imgUrl: 'docter',
  enterText: '医生端',
  textColor: 'white'
}, {
  color: '#fff',
  imgUrl: 'manager',
  enterText: '管理端',
  textColor: 'black'
}]

function Home () {
  return (
    <>
    <div className="modal">

    </div>
    <div className="home">
      <div className="home-tilte">
        <img src='/img/logo.png'></img>
        <p className="home-tilte-text"></p>
      </div>
      <div className="home-body">
        {homeList.map((item, index) => (
          <HomeEnterCrad {...item} key = {index}/>
        ))}
      </div>

    </div>
    </>
  )
}

export default Home
