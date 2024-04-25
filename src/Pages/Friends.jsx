import React from 'react'
import { Link } from 'react-router-dom';

import { Button, Form, Input, Space, Table} from 'antd';
import { SmileOutlined} from '@ant-design/icons';

import './styles/Avatar.css'


export default function Friends(props) {
  const columns = [
    {
      title: 'Аватар',
      key: 'img',
      render ({img}) 
      {
        return img ? <img className='avatar'src={img}/> : <SmileOutlined className='icon'/>
      }
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
          <Link to= "/" state={{ identifier: records.identifier}} >Перевести</Link>
          <a onClick={()=>{props.deleteFriend(records.identifier)}}>Удалить из друзей</a>
        </Space>
      ),
    },
  ];

  const onFinish = (value) => {
    props.addFriend(value.identifier)
  }

  return (
    <div key={props.friends} style={{margin: "20px 5%"}}>
      <Table
        scroll={{
          y: '50vh',
        }} 
        columns={columns} 
        dataSource={props.friends} 
        size="small"
      />
      <Form onFinish={onFinish}>
        <Space>
        <Form.Item
          name="identifier"
          rules={[
            {
              required: true,
              message: 'Пожалуйста, введите идентификатор!',
            },
          ]}
        >
          <Input 
          placeholder="Введите идентификатор"/>
        </Form.Item>

        <Form.Item >
          <Button type="primary" htmlType="submit">
            Добавить в список друзей
          </Button>
        </Form.Item>
        </Space>
      </Form>
    </div>
  )
}
