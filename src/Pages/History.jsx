import React from 'react'

import {Link} from "react-router-dom";

import { Space, Table} from 'antd';

import '../styles/History.css'


const columns = [
  {
    title: 'Получатель',
    dataIndex: 'recipient',
    key: 'recipient',
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
    render: (_, records) => (
      <Space size="middle">
        <Link to="/" state={{ identifier: records.identifier ,sum: records.sum}} >Повторить</Link>
      </Space>
    ),
  },
];

export default function History(props) {
  return (
    <form className='history'>
    <Table
        scroll={{
           y: '70vh',
        }} 
        columns={columns} 
        dataSource={props.history}
        size="small" 
    />
    </form>
  )
}
