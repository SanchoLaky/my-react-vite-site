import React from 'react'

import { Layout } from 'antd';
import AppHeader from '../components/layout/AppHeader';
import AppSider from '../components/layout/AppSider';
import AppContent from '../components/layout/AppContent';

import DataHistory from "../date/DateHistory.json"

import {Link} from "react-router-dom";

import { Space, Table} from 'antd';


import '../styles/History.css'


const columns = [
  {
    title: 'Получатель',
    dataIndex: 'recipient',
    key: 'recipient',
    // render: (text) => <a>{text}</a>,
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
      <>{record.sum.toFixed(2)}
      </>
    )
  },

  {
    title: 'Действие',
    key: 'action',
    render: (_, records) => (
      <Space size="middle">
        <Link to="/" state={{ identifier: records.identifier ,sum: records.sum}} >Повторить</Link>
        {/* <a>Повторить</a> */}
      </Space>
    ),
  },
];

// const data = [
//   {
//     key: '1',
//     recipient: 'John Brown',
//     date: '22.02.2003',
//     sum: 1000.00,
//   },
//   {
//     key: '1',
//     recipient: 'John Brown',
//     date: '22.02.2003',
//     sum: 1000.00,
//   },
//   {
//     key: '1',
//     recipient: 'John Brown',
//     date: '22.02.2003',
//     sum: 1000.00,
//   },
//   {
//     key: '1',
//     recipient: 'John Brown',
//     date: '22.02.2003',
//     sum: 1000.00,
//   },
//   {
//     key: '1',
//     recipient: 'John Brown',
//     date: '22.02.2003',
//     sum: 1000.00,
//   },
//   {
//     key: '1',
//     recipient: 'John Brown',
//     date: '22.02.2003',
//     sum: 1000.00,
//   },
//   {
//     key: '1',
//     recipient: 'John Brown',
//     date: '22.02.2003',
//     sum: 1000.00,
//   },
//   {
//     key: '1',
//     recipient: 'John Brown',
//     date: '22.02.2003',
//     sum: 1000.00,
//   },
//   {
//     key: '1',
//     recipient: 'John Brown',
//     date: '22.02.2003',
//     sum: 1000.00,
//   },
//   {
//     key: '1',
//     recipient: 'John Brown',
//     date: '22.02.2003',
//     sum: 1000.00,
//   },
//   {
//     key: '1',
//     recipient: 'John Brown',
//     date: '22.02.2003',
//     sum: 1000.00,
//   },
//   {
//     key: '1',
//     recipient: 'John Brown',
//     date: '22.02.2003',
//     sum: 1000.00,
//   },
//   {
//     key: '1',
//     recipient: 'John Brown',
//     date: '22.02.2003',
//     sum: 1000.00,
//   },

//   {
//     key: '1',
//     recipient: 'John Brown',
//     date: '22.02.2003',
//     sum: 1000.00,
//   },
//   {
//     key: '1',
//     recipient: 'John Brown',
//     date: '22.02.2003',
//     sum: 1000.00,
//   },

//   {
//     key: '1',
//     recipient: 'John Brown',
//     date: '22.02.2003',
//     sum: 1000.00,
//   },

//   {
//     key: '1',
//     recipient: 'John Brown',
//     date: '22.02.2003',
//     sum: 1000.00,
//   },
// ];









export default function History(props) {
  const contentTable = 
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
  return (
     <>{contentTable}</>
    // <Layout>
    // <AppHeader />


    // <Layout>
    //   {/* <AppSider page = "history"/> */}
    //   <AppContent content = {contentTable}/>
    // </Layout>


  // </Layout>
  )
}
