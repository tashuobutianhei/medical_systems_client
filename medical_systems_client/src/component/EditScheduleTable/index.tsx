import { Table, Divider, Tag } from 'antd';
import React from 'react'

function EditTable (props: any) {

  const columns = [
    {
      title: 'workerId',
      dataIndex: 'workerId'
    },
    {
      title: 'name',
      dataIndex: 'name',
    },
    {
      title: 'age',
      dataIndex: 'age',
    },
    {
      title: 'sex',
      dataIndex: 'sex',
    },
    {
      title: 'position',
      dataIndex: 'position',
    },
    {
      title: 'tel',
      dataIndex: 'tel',
    },
    {
      title: 'action',
      dataIndex: 'action',
      render: () => <a>Delete</a>,
    }]
    
  return (
    <Table dataSource={props.data} columns={columns} rowKey={props.data.key} pagination={false}></Table>
  )
}

export default EditTable;