import { Layout, Form} from 'antd';

import "../../styles/AppHeader.css"

const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 56,
  paddingInline: 10,
//   lineHeight: '56px',
  backgroundColor: '#030852',
};

import dataProfile from '../../date/DateProfile.json'

import { SmileOutlined} from '@ant-design/icons';
import { RightCircleOutlined} from '@ant-design/icons';

const avatar = dataProfile.img ? <img className='avatarProfile' src={dataProfile.img}/> : <SmileOutlined className='icon'/>




const headerInformation = 
<>
<form className='left' >Название компании</form>
<form className= 'right'>

{dataProfile.recipient} ({dataProfile.identifier}) {avatar} <RightCircleOutlined className='icon'/>
</form>
</>

export default function AppHeader() {



    return(
        <Layout.Header style={headerStyle}>
            {headerInformation}
        </Layout.Header>
    )
}