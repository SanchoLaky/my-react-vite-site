import React, { useState } from 'react'

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
        
        
        {/* {records.recipient} */}
        <Link to= "/" state={{ identifier: records.identifier}} >Перевести</Link>
        <a>Удалить из друзей</a>
        {/* <Button type="primary" style={{background: 'lightred'}}>Удалить из друзей</Button> */}
        {/* <Link to={{pathname: "/", propsSearch: {recipient: records.recipient} }}>Перевести</Link> */}
        {/* <Link to={{pathname: "/", query: records.recipient }}>Перевести</Link> */}
      </Space>
    ),
  },
];






export default function Friends(props) {
  const [identifier, setIdentifier] = useState('')
  
  const addFriend = () => {
    props.addFriend(identifier)
  }

  const onChange = (e) => {
    setIdentifier(e.target.value)
    // this.setState({someVal: e.target.value})
  }

  const contentInformation = 
  <>
  <form className='friends'>
    <Table className='table'
      scroll={{
        y: '50vh',
      }} 
      columns={columns} 
      dataSource={props.friends} 
      size="small"/>
    <Space.Compact style={{ width: '70%' }}>
  {/* <Space.Compact> */}
      <Input 
        onKeyDown={(e)=> e.keyCode == 13 ? e.preventDefault(): ''}
        placeholder="Введите идентификатор" 
        // onChange={value => {
        //   setIdentifier(value)
        // }}
        onChange={onChange}
      />
      <Button type="primary" onClick={addFriend}   style={{background: ''}}>Добавить в список друзей</Button>
    </Space.Compact>
  </form>
  </>


  return (
    <div key={props.friends}>{contentInformation}</div>
    // <Layout>
    // <AppHeader />

    // <Layout>
    //   {/* <AppSider page = "friends"/> */}
    //   <AppContent content = {contentInformation}/>
    // </Layout>
    
  // </Layout>
  )
}
