

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Transfer from './Pages/Transfer';
import History from './Pages/History';
import Friends from './Pages/Friends';
import { Layout } from 'antd';
import AppHeader from './components/layout/AppHeader';




export default  function App(){
  return  (   
    <>
    {/* <Transfer/> */}


      {/* <AppSider page = "friends"/>
      <AppContent content = {contentInformation}/>
    </Layout>
  </Layout> */}

  <Layout>
  <AppHeader />
  
    <Router>
             <Routes>
                 <Route path="/" element={<Transfer/>}/>   
                 <Route path="/history" element={<History />}/>
                 <Route path="/friends" element={<Friends/>}/>
             </Routes>
    </Router>
    </Layout>
    {/* <Router>
       <Routes>
         <Route path='/' element={<Transfer/>} />
       </Routes>
     </Router> */}

     {/* <Layout>
       <AppHeader />
       <Layout>
         <AppSider/>
         <AppContent/>
       </Layout>
     </Layout> */}
    </>
  )
}
