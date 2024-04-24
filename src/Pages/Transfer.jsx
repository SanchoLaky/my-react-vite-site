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
  const [form] = Form.useForm();
    
  const [listFriends] = useState( props.friends.map((item)=>{
    return {
      value : item.identifier,
      label : item.recipient + '(' +  item.identifier + ')'
    }
  }))

  const onFinish = (value) => {
    props.transfer(value.identifiers, value.sum)
    
  }

  const reset = () => {
    form.setFieldsValue({
      identifiers: null,
      sum: null,
    });
  }

  return (
    <Form 
        form={form}
        onFinish={onFinish}
        layout="vertical"      
        style = {formStyle}
      >
        <Form.Item 
          label="Получатель"
          name="identifiers"
          initialValue= {state ? (state.identifier? [state.identifier] : null) : null}
          rules={[
            {
              required: true,
              message: 'Пожалуйста, выберите/ведите идентификатор!',
            },
          ]}
        >
          <Select             
            mode="tags"
            placeholder="Выберите из списка или введите идентификатор" 
            options={listFriends} 
            style={{width: '100%'}}
          />
        </Form.Item>

        <Form.Item 
          label="Сумма"
          name="sum"
          initialValue= {state ? (state.sum? (state.sum) : null) : null}
          rules={[
            {
              required: true,
              message: 'Пожалуйста, введите сумму!',
            },
          ]}
        >
          <InputNumber
            style={{width: '100%'}}
            placeholder="0.00" 
            min="0.01"
            step="0.01" 
          />
        </Form.Item>
        <Form.Item 
        name="buttons">
          <Space>
            <Button type="primary" htmlType="submit">
                  Перевести
            </Button>
            <Button htmlType="button" onClick={reset}>
                  Oтмена
            </Button>
          </Space>
        </Form.Item>
      </Form>
  )
}

