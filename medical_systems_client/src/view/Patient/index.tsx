import React, { useState } from 'react'
import { Layout, Menu, Avatar, BackTop, Dropdown, Icon } from 'antd';
import { Route, Switch, withRouter, Redirect, RouteComponentProps } from 'react-router-dom'
import { connect } from 'react-redux'

import 'antd/dist/antd.css'
import './index.scss'

import DocterInfo from '../DocterInfo';
import PatientHome from '../PatientHome';
import Department from '../Department';
import Order from '../Order';
import Guide from '../Guide/';
import {LoginRegModal as LogRegFormModal} from '../../component/loginAndReg'
import { userLogin, userLogout } from '../../actiosn/user';
import tool from '../../common/util'


const { Header, Content, Footer } = Layout;


const mapStateToProps = (state: { user: any; }) => {
  return {
    user: state.user
  }
}


const mapDispatchToProps = (dispatch: (arg0: { type: string; userInfo?: any; }) => void) => {
  return {
    onLogin: (userInfo: any) => {
      dispatch(userLogin(userInfo))
    },
    onLogout: () => {
      dispatch(userLogout())
    },
  }
}

type PatientType = {
  user: any
  onLogin(userInfo: any): void
  onLogout(): void
}

function Patient (props: PatientType & RouteComponentProps) {

  let [LoginRegModalVisable, changLoginRegModalVisable] = useState<boolean>(false);

  const logout = () => {
    tool.delCookie('the_docters_token');
    props.onLogout();
  }

  const menu = (
    <Menu>
      <Menu.Item key="my" >个人中心</Menu.Item>
      <Menu.Item key="logout" onClick={logout}>退出登录</Menu.Item>
    </Menu>
  );

  const toggleModalVisable = (visable: boolean) => {
    changLoginRegModalVisable(visable);
  }
  
  const userInfo = props.user;

  let key = props.location.pathname.split('/')[2];


  return (
    <>
    <LogRegFormModal 
      visible={LoginRegModalVisable} 
      toggleModalVisable={toggleModalVisable}
      loginSuccess={props.onLogin}

    ></LogRegFormModal>
    <Layout className="layout">
      <Header className="header">
        <img src="/img/logo.png" ></img>
        <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[key]}
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
              userInfo && userInfo.username ?
                <div>
                  <Avatar icon="user"/>
                  <Dropdown overlay={menu} className="div">
                    <a className="ant-dropdown-link" href="#">
                      <span>{userInfo.username}</span>
                      <Icon type="down" />
                    </a>
                  </Dropdown>
                </div>
                :
                <div>
                  <Avatar icon="user" />
                  <span className="div" 
                  onClick={()=>{
                    changLoginRegModalVisable(!LoginRegModalVisable);
                  }}
                  style={{ color: 'white', cursor: 'pointer' }}>登录</span>
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
    </>
  );
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Patient)
);