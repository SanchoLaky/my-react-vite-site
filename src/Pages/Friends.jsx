import React from 'react'

import { Button, Input } from 'antd';
import { Space, Table} from 'antd';
import { Layout } from 'antd';

import { SmileOutlined} from '@ant-design/icons';

import AppHeader from '../components/layout/AppHeader';
import AppSider from '../components/layout/AppSider';
import AppContent from '../components/layout/AppContent';

import DataFriends from "../date/DateFriends.json"

import '../styles/Friends.css'
import { Link } from 'react-router-dom';


const columns = [
  {
    title: 'Аватар',
    // dataIndex: 'img',
    key: 'img',
    render (_, {img}) 
    {
      return img ? <img className='avatar'
      src={img}
      /> : <SmileOutlined className='avatarIcon'/>

    }
    // (
    //   <img
    //   src={img}
    //   height="30"
    //   width="30"
    //   />
    // ),
  },


  {
    title: 'Имя',
    dataIndex: 'recipient',
    key: 'recipient',
  },

  {
    title: 'Идентификатор',
    dataIndex: 'identifier',
    key: 'identifier',
  },


  {
    title: 'Действие',
    key: 'action',
    render: (records) => (
      <Space size="middle">
        <a>Удалить из друзей</a>
        <Link to={{pathname: "/", state: {recipient: records.recipient} }}>Перевести</Link>
      </Space>
    ),
  },
];






export default function Friends(props) {
  const contentInformation = 
  <>
  <form className='friends'>
    <Table className='table'
      scroll={{
        y: '50vh',
      }} 
      columns={columns} 
      dataSource={props.friends} />
    <Space.Compact style={{ width: '70%' }}>
  {/* <Space.Compact> */}
      <Input placeholder="Введите идентификатор" />
      <Button type="primary">Найти друга</Button>
    </Space.Compact>
  </form>
  </>


  return (
    <>{contentInformation}</>
    // <Layout>
    // <AppHeader />

    // <Layout>
    //   {/* <AppSider page = "friends"/> */}
    //   <AppContent content = {contentInformation}/>
    // </Layout>
    
  // </Layout>
  )
}
