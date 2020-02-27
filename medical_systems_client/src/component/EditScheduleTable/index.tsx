import { Table, Divider, Tag } from 'antd';
import React from 'react'

function EditTable (props: any) {

  const columns = [
    {
      title: '工号',
      dataIndex: 'workerId'
    },
    {
      title: '姓名',
      dataIndex: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
    },
    {
      title: '性别',
      dataIndex: 'sex',
    },
    {
      title: '职称',
      dataIndex: 'position',
    },
    {
      title: '电话',
      dataIndex: 'tel',
    },
    {
      title: 'action',
      dataIndex: 'action',
      render: () => <a onClick={() => {
        props.delete(props.data, props.wokrId);
      }}>移除</a>,
    }]
    
  return (
    <Table dataSource={props.data} columns={columns} rowKey={props.data.key} pagination={false}></Table>
  )
}

export default EditTable;