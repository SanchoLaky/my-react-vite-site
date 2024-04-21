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
  this.addFriend = this.addFriend.bind(this);
  }

  newTransfer(identifiers, sum){
    let totalSum = identifiers.length*sum;
    // alert(totalSum);
    if (totalSum>this.state.profile.sum)
      alert("Недостаточно средств для перевода");
    else{
      var correctRecipients = [];
      var errorRecipients = [];
      for (let i = 0; i < identifiers.length; i++) {
        for (let j = 0; j < this.state.people.length; j++)
          if (this.state.people[j].identifier == identifiers[i]){
            correctRecipients.push({
              recipient: this.state.people[j].recipient,
              identifier: identifiers[i]
            })
            break;
          }
        if (correctRecipients.length!= i+1)
          errorRecipients.push(identifiers[i])
      }
      console.log({correctRecipients, errorRecipients})
      if (errorRecipients.length>0)
      {
        let total = ("Ошибка! Следующие идентификаторы не найдены в системе: " + errorRecipients);
        alert(total);
      }
      else
      {
        let date = (new Date()).toLocaleDateString();
        for (let i = 0; i < correctRecipients.length; i++)
        if (correctRecipients[i].identifier != this.state.profile.identifier){
          this.state.history.unshift({
            key: this.state.history.length + i + 1,
            recipient: correctRecipients[i].recipient,
            identifier: correctRecipients[i].identifier,
            date: date,
            sum: sum
          });
          this.state.profile = {
            recipient:  this.state.profile.recipient,
            identifier: this.state.profile.identifier,
            img: this.state.profile.img,
            sum: this.state.profile.sum - sum
          }
          this.setState({profile: this.state.profile})
          // this.state.profile.sum = this.state.profile.sum - sum;
          console.log(this.state.profile.sum);
        }
        // alert ('Средства успешно переведены')
      }
    }
    let date = (new Date()).toLocaleDateString();
    // let total = ("Получатель: " + identifier + " сумма: "+ sum + " дата"+ date);
    // alert(total);
    // // alert({identifier, sum})
    console.log({identifiers, sum,date})
    // this.state.history.unshift(
    //   {
    //     key: 549,
    //     recipient: "Новый получатель",
    //     identifier: identifier,
    //     date: date,
    //     sum: sum
    //   }
    // )
  }

  addFriend(identifier){
    // alert(identifier)
    console.log(identifier)
    if (identifier == this.state.profile.identifier)
      alert("Нельзя добавить в список друзей самого себя")
    else
    {
      let newFritnd = null
      for (let i = 0; i < this.state.people.length; i++)
        if (this.state.people[i].identifier == identifier)
        {
          newFritnd = this.state.people[i];
          break;
        }
      console.log(newFritnd);
      if (newFritnd)
      {
        for (let i = 0; i < this.state.friends.length; i++)
          if (this.state.people[i].identifier == identifier)
          {
            newFritnd = null;
            break;
          }
        console.log(newFritnd);
        if (newFritnd)
        {
          this.state.friends.unshift(newFritnd);
          this.setState({friends: this.state.friends})
          alert("Поздравляем! Вы добавили в свой список друзей нового человека")
        }
        else
        {
          let total = ("Внимание! Человек с идентификатором " + identifier+ " уже добавлен к вам в друзья");
          alert(total)
        }
      }
      else
      {
        let total = ("Ошибка! Идентификатор " + identifier+ " НЕ НАЙДЕН!");
        alert(total)
      }

    }
  }

  render() {
    return (
      <Router>
      <Layout>
        <AppHeader profile = {this.state.profile} />
        <Layout>
          <AppSider page ={''} sum = {this.state.profile.sum}/>
          <AppContent content =
            {<Routes>
              <Route path="/" element={<Transfer friends = {this.state.friends} transfer={this.newTransfer} />}/>   
              <Route path="/history" element={<History history = {this.state.history} />}/>
              <Route path="/friends" element={<Friends friends = {this.state.friends} addFriend = {this.addFriend}/>}/>
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
