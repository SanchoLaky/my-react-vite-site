import React, { useState } from 'react'

import { useLocation } from 'react-router-dom'

import { Button, Select, Space, Form, InputNumber } from 'antd';

const formStyle = {
  width: '50%',
  border: 'solid 1px lightgrey',
  borderRadius: "15px",
  padding: '1rem' ,
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '10%',
};

export default function Transfer(props) {
  const location = useLocation()
  const state  = location.state
  const [listFriends] = useState(jQuery.map(props.friends, function (item) { 
               return {
                 value : item.identifier,
                 label : item.recipient + '(' +  item.identifier + ')'
               }; 
             }))
  const [identifier, setIdentifier] = useState(state ? (state.identifier? [state.identifier] : null) : null)
  const [sum, setSum] = useState(state ? (state.sum? (state.sum) : 0) : null)

  const onFinish = () => {
    props.transfer(identifier, sum)
  }

  const reset = () => {
    setIdentifier(null)
    setSum(0)
  }
  return (
    <Form 
        onFinish={onFinish}
        layout="vertical"      
        style = {formStyle}
      >
        <Form.Item 
          label="Получатель"
          name="identifiers"
          rules={[
            {
              required: true,
              message: 'Пожалуйста, выберите/ведите идентификатор!',
            },
          ]}
        >
          <Select             
          mode="tags"
            onChange={value => {
              setIdentifier(value)
            }}
            placeholder="Выберите из списка или введите идентификатор" 
            options={listFriends} 
            style={{width: '100%'}}
            value={identifier}  
          />
        </Form.Item>

        <Form.Item 
          label="Сумма"
          name="sum"
          rules={[
            {
              required: true,
              message: 'Пожалуйста, введите сумму!',
            },
          ]}
        >
          <InputNumber
            style={{width: '100%'}}
            // defaultValue="0"
            placeholder="0.00" 
            min="0.01"
            step="0.01"
            onChange={value => {
              setSum(value)
            }}    
            value={sum}    
          />
        </Form.Item>
        <Form.Item >
          <Space>
            <Button type="primary" htmlType="submit">
                  Перевести
            </Button>
            <Button onClick={reset}>
                  Oтмена
            </Button>
          </Space>
        </Form.Item>
      </Form>
  )
}

