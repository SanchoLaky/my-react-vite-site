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



import React, { Component } from 'react'

export default class Transfer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listFriends: jQuery.map(props.friends, function (item) { 
          return {
            value : item.identifier,
            label : item.recipient + '(' +  item.identifier + ')'
          }; 
        }),
      
      // identifier: useLocation().state ? useLocation().state: '',
      identifier: '',
      sum: 0,
      // myform: Form
    };
    // this.reset = this.reset.bind(this);

  }



  onFinish = () => {
    if(this.state.identifier)
      if (this.state.sum)
        this.props.transfer(this.state.identifier, this.state.sum)
      else
      alert("Введите Сумму!")
    else
      alert("Выберите получателя!")

      // this.props.transfer(this.state.identifier, this.state.sum)
  };
  // reset = () => {
  //   this.state.myform.resetFields()
  //   // form.resetFields();
  // }


  render() {
    return (
      <Form 
        onFinish={this.onFinish}
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
            
          // mode="tags"
          // maxTagCount = {1}
            onChange={value => {
              this.setState({identifier: value});
            }}
            placeholder="Выберите получателя" 
            options={this.state.listFriends} 
            style={{width: '100%'}}
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
              this.setState({sum: value});
            }}           
          />
        </Form.Item>
        <Form.Item >
        <Space>
        <Button type="primary" htmlType="submit">
              Перевести
        </Button>
        <Button 
          // onClick={this.reset}
        >
              Oтмена
        </Button>
        </Space>
        </Form.Item>
      </Form>
    )
  }
}

