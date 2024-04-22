import { Layout } from 'antd';
import { SmileOutlined, RightCircleOutlined } from '@ant-design/icons';

import "../../styles/AppHeader.css"

const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 56,
  paddingInline: 10,
  backgroundColor: '#030852',
};

export default function AppHeader(props) {
  const avatar = props.profile.img ? <img className='avatarProfile' src={props.profile.img}/> : <SmileOutlined className='icon'/>
    return(
        <Layout.Header style={headerStyle}>
          <form className='left' >Название компании</form>
          <form className= 'right'>
            {props.profile.recipient} ({props.profile.identifier}) {avatar} <RightCircleOutlined className='icon'/>
          </form>
        </Layout.Header>
    )
}