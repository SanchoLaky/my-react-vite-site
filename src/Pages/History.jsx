import React from 'react'

import {Link} from "react-router-dom";

import { Space, Table} from 'antd';

const columns = [
  {
    title: 'Получатель',
    key: 'recipient',
    render: (_, record) => (
      <>{record.recipient}({record.identifier})</>
    )

  },
  {
    title: 'Дата',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Сумма',
    key: 'sum',
    render: (_, record) => (
      <>{record.sum.toFixed(2)}</>
    )
  },

  {
    title: 'Действие',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <Link to="/" state={{ identifier: record.identifier ,sum: record.sum}} >Повторить</Link>
      </Space>
    ),
  },
];

export default function History(props) {
  return (
    <div style={{margin: "20px 10%"}}>
    <Table
        scroll={{
           y: '70vh',
        }} 
        columns={columns} 
        dataSource={props.history}
        size="small" 
    />
    </div>
  )
}
