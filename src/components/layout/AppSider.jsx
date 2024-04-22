import { Layout } from 'antd';
import { Link, useLocation } from 'react-router-dom';

import '../../styles/AppSider.css'

const siderStyle = {
    textAlign: 'center',
    color: '#23336D',
    backgroundColor: '#F0F5FF',
  };

export default function AppSider(props) {
    let location = useLocation();
    return(
        <Layout.Sider width="25%" style={siderStyle} >
            <form className='sider'>
            <p className='sum'>{props.sum.toFixed(2)}</p>
            <p>Остаток средств</p>
            </form>
            <form className='sider menu'>
                <nav>
                    <ul>
                        <li className = {location.pathname == "/" ? 'selected' : ''}>
                            <Link to="/" >Перевести</Link>
                        </li>
                        <li className = {location.pathname == "/history" ? 'selected' : ''}>
                            <Link to = "/history">История операций</Link>
                        </li>
                        <li className = {location.pathname == "/friends" ? 'selected' : ''}>
                            <Link to = "/friends">Список друзей</Link>
                        </li>
                    </ul>
                </nav>
            </form>
        </Layout.Sider>
    ) 
}