import React from 'react';
// import { Layout, Menu, Avatar, BackTop, Dropdown, Icon } from 'antd';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import Home from '../view/Home/index';
import Patient from '../view/Patient/index';

import 'antd/dist/antd.css';
import './router.scss';

function RootRoute() {
	return (
    <Switch>
      <Route exact path="/Home" component={Home}/>
      <Route path='/Patient'  component={Patient}/>
      <Redirect to='/Home'></Redirect>
    </Switch>
	);
}

export default RootRoute;