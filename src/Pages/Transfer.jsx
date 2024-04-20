// import React from 'react'

import { Layout } from 'antd';
import AppHeader from '../components/layout/AppHeader';
import AppSider from '../components/layout/AppSider';
import AppContent from '../components/layout/AppContent';

import { Button, Input, Select, Space,Form,InputNumber } from 'antd';

import { useLocation } from 'react-router-dom'

// const [form] = Form.useForm();

const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
  },
];

const formStyle = {
  width: '50%',
  border: 'solid 1px lightgrey',
  borderRadius: "15px",
  padding: '1rem' ,
};



import React, { Component, useState } from 'react'

export default function Transfer(props) {
  // const {state} = useLocation();
  // // const state = location.state;
  // // const { state } = props.location
  // console.log(state);
  // const [form] = Form.useForm();

  const location = useLocation()
  const state  = location.state
  // console.log(location);
  // console.log(props.location.propsSearch);

  const [listFriends] = useState(jQuery.map(props.friends, function (item) { 
               return {
                 value : item.identifier,
                 label : item.recipient + '(' +  item.identifier + ')'
               }; 
             }))
  const [identifier, setIdentifier] = useState(state ? (state.identifier? (state.identifier) : null) : null)
  const [sum, setSum] = useState(state ? (state.sum? (state.sum) : 0) : 0)

  const onFinish = () => {
    // alert(this.props.location.query)
    if(identifier)
      if (sum)
        props.transfer(identifier, sum)
      else
      alert("Введите Сумму!")
    else
      alert("Выберите получателя!")
      // this.props.transfer(this.state.identifier, this.state.sum)
      // setIdentifier(null)
      // setSum(0)
      // form.resetFields();
  }

  const reset = () => {
    setIdentifier(null)
    setSum(0)
    // form.resetFields();
    // alert("elfktyj")
  }
  return (
    <Form 
        // form={form}
        onFinish={onFinish}
        layout="vertical"
        style = {formStyle}

        // autoComplete="off"
        // initialValues={{
        //   remember: true,
        // }}
        // form = {this.state.myform}

      >
        <Form.Item label="Получатель">
          <Select 
            
          mode="tags"
          // maxTagCount = {1}
            onChange={value => {
              setIdentifier(value)
            }}
            placeholder="Выберите получателя" 
            options={listFriends} 
            style={{width: '100%'}}
            // defaultValue={identifier}  
            value={identifier}  
          />
        </Form.Item>
        <Form.Item label="Сумма">
          <InputNumber
            style={{width: '100%'}}
            // defaultValue="0"
            placeholder="0.00" 
            min="0"
            step="0.01"
            onChange={value => {
              setSum(value)
            }} 
            // defaultValue={sum}      
            value={sum}    
          />
        </Form.Item>
        <Form.Item >
        <Space>
        <Button type="primary" htmlType="submit">
              Перевести
        </Button>
        <Button 
          onClick={reset}
        >
              Oтмена
        </Button>
        </Space>
        </Form.Item>
      </Form>
  )
}

