import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Transfer from './Pages/Transfer';
import History from './Pages/History';
import Friends from './Pages/Friends';
import { Layout } from 'antd';
import AppHeader from './components/layout/AppHeader';

import dateFriends from './date/DateFriends.json'
import datePeople from './date/DatePeople.json'
import dateProfile from './date/DateProfile.json'
import dateHistory from './date/DateHistory.json'


import React, { Component } from 'react'
// import AppSider from './components/layout/AppSider';
import AppSider from './components/layout/AppSider';
import AppContent from './components/layout/AppContent';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      friends: dateFriends,
      people: datePeople,
      profile: dateProfile,
      history: dateHistory
    }
  this.newTransfer = this.newTransfer.bind(this);
  }

  newTransfer(identifier, sum){
    let total = ("Получатель: " + identifier + "сумма: "+ sum);
    alert(total);
    // alert({identifier, sum})
    console.log({identifier, sum})
  }

  render() {
    return (
      <Router>
      <Layout>
        <AppHeader profile = {this.state.profile} />
        <Layout>
          <AppSider page =''/>
          <AppContent content =
            {<Routes>
              <Route path="/" element={<Transfer friends = {this.state.friends} transfer={this.newTransfer} />}/>   
              <Route path="/history" element={<History history = {this.state.history} />}/>
              <Route path="/friends" element={<Friends friends = {this.state.friends} />}/>
            </Routes>}
          />
        </Layout>
      </Layout>
      </Router>
    )
  }
}



// export default  function App(){
//   return  (   
//     <>
//     {/* <Transfer/> */}


//       {/* <AppSider page = "friends"/>
//       <AppContent content = {contentInformation}/>
//     </Layout>
//   </Layout> */}

//   <Layout>
//   <AppHeader />
  
//     <Router>
//              <Routes>
//                  <Route path="/" element={<Transfer/>}/>   
//                  <Route path="/history" element={<History />}/>
//                  <Route path="/friends" element={<Friends/>}/>
//              </Routes>
//     </Router>
//     </Layout>
//     {/* <Router>
//        <Routes>
//          <Route path='/' element={<Transfer/>} />
//        </Routes>
//      </Router> */}

//      {/* <Layout>
//        <AppHeader />
//        <Layout>
//          <AppSider/>
//          <AppContent/>
//        </Layout>
//      </Layout> */}
//     </>
//   )
// }
