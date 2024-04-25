import { Layout } from 'antd';
import { SmileOutlined, RightCircleOutlined } from '@ant-design/icons';

import "../../Pages/styles/Avatar.css"

const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 56,
  paddingInline: 10,
  backgroundColor: '#030852',
};

const leftStyle ={
  fontSize: 'large',
  float: 'left',
}

const rightStyle ={
  fontSize: 'medium',
  float: 'right',
  alignItems: 'center',
  display: 'flex',
  gap: '0.4rem'
}


export default function AppHeader(props) {
  const avatar = props.profile.img ? <img className='avatar' src={props.profile.img}/> : <SmileOutlined className='icon'/>
    return(
        <Layout.Header style={headerStyle}>
          <div style={leftStyle}>
          Название компании
          </div>
          <div style={rightStyle}>
            {props.profile.recipient} ({props.profile.identifier}) {avatar} <RightCircleOutlined className='icon'/>
          </div>
        </Layout.Header>
    )
}