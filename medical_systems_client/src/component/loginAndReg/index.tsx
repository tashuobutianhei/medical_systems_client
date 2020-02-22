import React, { useState } from 'react';
import { Form, Icon, Input, Modal} from 'antd';

import {WrappedLoginForm} from '../LoginForm/index';
import {WrappedRegForm} from '../registerForm'


import 'antd/dist/antd.css'
import './index.scss'

type Props = {
  visible: boolean
  toggleModalVisable: (visable:boolean) => void;
}

export function LoginRegModal(props: Props) {
  let [action,changeStatus]  = useState<string>('login');
  let visible = props.visible;
  let regForm, loginForm;

  const changeStatusFunc = (aciton:string) => {
    changeStatus(aciton);
  }

  return(
    <Modal
    title={`快！${action === 'login' ? '登录' : '注册'}！`}
    okText={`${action === 'login' ? '登录' : '注册'}！`}
    cancelText="算了"
    visible={visible}
    onOk={()=> props.toggleModalVisable(true)}
    onCancel={()=> props.toggleModalVisable(false)}
    >
    {
      action === 'login' ? 
      <WrappedLoginForm  ref={(c)=>loginForm = c } changeStatus={changeStatusFunc}></WrappedLoginForm> : 
      <WrappedRegForm ref={(c)=>regForm = c } changeStatus={changeStatusFunc}></WrappedRegForm>
    }
  </Modal>
  )
}