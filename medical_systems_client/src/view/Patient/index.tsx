import React from 'react'
import { Layout, Menu, Avatar, BackTop, Dropdown, Icon } from 'antd';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'

import 'antd/dist/antd.css'
import './index.scss'

import DocterInfo from '../DocterInfo';
import PatientHome from '../PatientHome';
import Department from '../Department';
import Order from '../Order';
import Guide from '../Guide/';


const { Header, Content, Footer } = Layout;

function Patient (props: any) {

  const menu = (
    <Menu>
      <Menu.Item key="my" >个人中心</Menu.Item>
      <Menu.Item key="logout" >退出登录</Menu.Item>
    </Menu>
  );


  return (
    <Layout className="layout">
      <Header className="header">
        <img src="/img/logo.png" ></img>
        <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['Home']}
            onClick={(e: any) => {
              props.history.push(`/Patient/${e.key}`)
            }}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="Home">首页</Menu.Item>
            <Menu.Item key="Order">医疗挂号</Menu.Item>
            <Menu.Item key="Department">科室导航</Menu.Item>
            <Menu.Item key="DocterInfo">医生介绍</Menu.Item>
            <Menu.Item key="Guide">就医指南</Menu.Item>
            <div className="myvalue">
            {
              false ?
                <div>
                  <Avatar icon="user" src={`/img/patient.png`} />
                  <Dropdown overlay={menu} className="div">
                    <a className="ant-dropdown-link" href="#">
                      {/* <span>{this.props.user.userNickName}</span> */}
                      <Icon type="down" />
                    </a>
                  </Dropdown>
                </div>
                :
                <div>
                  <Avatar icon="user" />
                  <span className="div" style={{ color: 'white', cursor: 'pointer' }}>登录</span>
                </div>
            }
            </div>
          </Menu>
      </Header>
      <Content className="content">
        <Switch>
            <Route exact path="/Patient/Home" component={PatientHome}/>
            <Route path="/Patient/order" component={Order} />
            <Route path="/Patient/docterInfo" component={DocterInfo} />
            <Route path="/Patient/department" component={Department}/>
            <Route path="/Patient/guide" component={Guide}/>
            <Redirect to='/Patient/Home'></Redirect>
          </Switch>
      </Content>
      <Footer className="footer">The Docters medical systems ©2020 Created by lizilong @ 软件工程 2016 02</Footer>
    </Layout>
  );
}

export default withRouter(Patient);