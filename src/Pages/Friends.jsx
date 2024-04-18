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
    render: () => (
      <Space size="middle">
        <a>Удалить из друзей</a>
        <a>Перевести</a>
      </Space>
    ),
  },
];

const contentInformation = 
  <>
  <form className='friends'>
    <Table className='table'
      scroll={{
        y: '50vh',
      }} 
      columns={columns} 
      dataSource={DataFriends} />
    <Space.Compact style={{ width: '70%' }}>
  {/* <Space.Compact> */}
      <Input placeholder="Введите идентификатор" />
      <Button type="primary">Найти друга</Button>
    </Space.Compact>
  </form>
  </>




export default function Friends() {
  return (
    // <Layout>
    // <AppHeader />
    <Layout>
      <AppSider page = "friends"/>
      <AppContent content = {contentInformation}/>
    </Layout>
  // </Layout>
  )
}
