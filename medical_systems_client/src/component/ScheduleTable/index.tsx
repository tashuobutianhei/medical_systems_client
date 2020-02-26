import React, { useState, useEffect } from 'react'
import { Table, Badge, Menu, Dropdown, Icon } from 'antd';
import EditScheduleTable from '../EditScheduleTable';

import doctorClient from '../../api/doctor';

import 'antd/dist/antd.css'
import './index.scss'

const sData = {
  key: Math.random(),
  // workerId: '1',
  name: 'John',
  age: 'Brown',
  sex: 32,
  position: 'New York',
  tel: '111111',
}

function ScheduleTable(props: {departmentId: string}) {
  const [data, changeData] = useState<any[]>([]);
  const [EditdataList, changeEditdataList] =  useState<any[]>([]);
  
  useEffect(() => {
    doctorClient.createWorkList(props.departmentId).then(res => {

    });
    let array: any[] = [];
    for (let i = 0; i < 3; ++i) {
      array.push({
        key:i,
        wokrId: i,
        shifts: 'Screem',
        time: 'iOS',
        editer: '111',
        add: '10.3.4.5654',
      });
    }
    changeData(array);
  }, []);
  
  
  const addWork = (record: any) => {
    let midArray = [...EditdataList, {
      ...sData,
      workerId: record.wokrId
    }];
    changeEditdataList(midArray);
  }

  const fliterData = (wokrId: string | number) => {
    return EditdataList.filter(item => item.workerId === wokrId);
  }

  const columns = [
    { title: '班次序列号', dataIndex: 'wokrId', key: 'wokrId' },
    { title: '班次', dataIndex: 'shifts', key: 'shifts' },
    { title: '时间', dataIndex: 'time', key: 'time' },
    { title: '编辑人', dataIndex: 'editer', key: 'editer' },
    { title: '添加', 
      key: 'add', 
      render: (record: any) => <a onClick={()=> {
        addWork(record);
      }}>Add</a> 
    },
  ];

  return (
    <Table
      defaultExpandedRowKeys={[0, 2, 1]}
      bordered
      rowKey={record => record.wokrId} 
      className="schdeuleTable"
      columns={columns}
      expandedRowRender={(record: any) => {
        return (<EditScheduleTable data={fliterData(record.wokrId)}></EditScheduleTable>)
      }}
      dataSource={data}
      pagination={false}
    />
  );
}

export default ScheduleTable