import { Layout } from 'antd';
//import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes, Link, Outlet} from "react-router-dom";

import Transfer from '../../Pages/Transfer';
import History from '../../Pages/History';
import Friends from '../../Pages/Friends';

import '../../styles/AppSider.css'

import dataProfile from '../../date/DateProfile.json'

const siderStyle = {
    textAlign: 'center',
    // lineHeight: '120px',
    color: '#23336D',
    backgroundColor: '#F0F5FF',
  };

export default function AppSider(props) {
    return(
        <>
        <Layout.Sider width="25%" style={siderStyle}>
        <form className='sider'>
        <p className='sum'>{dataProfile.sum.toFixed(2)}</p>
        <p>Остаток средств</p>
        </form>

        <form className='sider menu'>
            <nav>
                <ul>
                    <li className = {props.page == "transfer" ? 'selected' : ''}>
                        <Link to="/">Перевести</Link>
                    </li>
                    <li className = {props.page == "history" ? 'selected' : ''}>
                        <Link to = "/history">История операций</Link>
                    </li>
                    <li className = {props.page == "friends" ? 'selected' : ''}>
                        <Link to = "/friends">Список друзей</Link>
                    </li>
                </ul>
            </nav>
        </form>
        </Layout.Sider>
        {/* <Router>
             <Routes>
                 <Route path="/" element={<Transfer/>}/>   
                 <Route path="/history" element={<History/>}/>
                 <Route path="/friends" element={<Friends/>}/>
             </Routes>
        </Router> */}
        </>
        
    )
    
}