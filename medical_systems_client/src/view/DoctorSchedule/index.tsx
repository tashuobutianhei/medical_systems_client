import React from 'react'
import { Layout, Menu, Avatar, BackTop, Dropdown, Icon } from 'antd';
// import { Route, Switch, withRouter, Redirect } from 'react-router-dom'

import SceduleTable from '../../component/ScheduleTable/index';

import 'antd/dist/antd.css'
import './index.scss'
import { connect } from 'react-redux';


const { Content, Sider } = Layout;
const { SubMenu } = Menu;

function DocterInfo (props: any) {
  const getScheduleDateList = () => {
    let ScheduleDateList = [];
    let step = 86400000;
    for (let i = 0; i < 6; i++) {
      let itemDate = new Date(Date.now() + i * step);
      let year = itemDate.getFullYear();
      let month = itemDate.getMonth() + 1;
      let day = itemDate.getDate();

      ScheduleDateList.push(new Date(`${year}-${month}-${day}`));
    }
    return ScheduleDateList;
  }

  const getDateString = (date: Date) => {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    return `${year}年${month}月${day}日`;
  }

  return (
    <div>
      <Layout className="doctor-schedule">
        <Sider width={200} style={{ background: '#fff' }}> 
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="user" />
                排班表
              </span>
            }
          >
            {
              getScheduleDateList().map(item => {
                return (
                  <Menu.Item key={item.toDateString()}>{getDateString(item)}</Menu.Item>
                )
              })
            }
          </SubMenu>
          </Menu>
        </Sider>
        <Content className="content">
            <SceduleTable departmentId={props.user.type}></SceduleTable>
        </Content>
      </Layout>
    </div>
  );
}

const mapStateToProps = (state: { user: any; }) => {
  return {
    user: state.user
  }
}

export default connect(
    mapStateToProps,
  )(DocterInfo)
;