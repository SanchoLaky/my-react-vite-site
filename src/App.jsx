import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import React, { Component } from 'react'

import { Layout } from 'antd';

import Transfer from './Pages/Transfer';
import History from './Pages/History';
import Friends from './Pages/Friends';

import AppHeader from './components/layout/AppHeader';
import AppSider from './components/layout/AppSider';
import AppContent from './components/layout/AppContent';

import dateFriends from './date/DateFriends.json'
import datePeople from './date/DatePeople.json'
import dateProfile from './date/DateProfile.json'
import dateHistory from './date/DateHistory.json'


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      friends: dateFriends,
      people: datePeople,
      profile: dateProfile,
      history: dateHistory,
      page: window.location.pathname
    }
  this.newTransfer = this.newTransfer.bind(this)
  this.addFriend = this.addFriend.bind(this)
  this.deleteFriend = this.deleteFriend.bind(this)
  }
  checkPeopleList(identifier)
  {
    for (let i = 0; i < this.state.people.length; i++)
      if (this.state.people[i].identifier == identifier){
        return this.state.people[i]
        }
    return null
  }

  checkFriendList(identifier)
  {
    for (let i = 0; i < this.state.friends.length; i++)
      if (this.state.friends[i].identifier == identifier){
        return this.state.friends[i]
        }
    return null
  }

  addHistory(identifier, recipient, sum)
  {
    this.state.history.unshift({
      key: this.state.history.length + 1,
      recipient: recipient,
      identifier: identifier,
      date: (new Date()).toLocaleDateString(),
      sum: sum
    })
  }

  newTransfer(identifiers, sum){
    for (let i = 0; i < identifiers.length; i++)
      if (identifiers[i]==this.state.profile.identifier)
      {
        let total = ("Пожалуйста, уберите свой идентификатор (" +this.state.profile.identifier +") из списка получателей!" )
        alert(total)
        return
      }
    if (identifiers.length*sum>this.state.profile.sum){
      alert("Недостаточно средств для перевода");
      return
    }

    let correctRecipients = [];
    let errorRecipients = [];
    for (let i = 0; i < identifiers.length; i++){
      let recipient = this.checkPeopleList(identifiers[i])
      if (recipient)
        correctRecipients.push(recipient)
      else
        errorRecipients.push(identifiers[i])
    }
    if (errorRecipients.length>0)
    {
      let total = ("Ошибка! Следующие идентификаторы не найдены в системе: " + errorRecipients)
      alert(total)
      return
    }
    let stringRecipients =""
    for (let i = 0; i < correctRecipients.length; i++)
      stringRecipients += correctRecipients[i].recipient + '(' + correctRecipients[i].identifier + ') '
    let total = ("Вы подтверждаете перевод на общую сумму " +sum*correctRecipients.length + " следующим людям " + stringRecipients + "?");
    let transfer = confirm(total);
    
    if (!transfer){
      alert ('Отмена перевода')
      return
    }

    for (let i = 0; i < correctRecipients.length; i++){
      this.addHistory(correctRecipients[i].identifier, correctRecipients[i].recipient, sum)
      this.state.profile.sum -= sum
      console.log(this.state.profile.sum)
    }
    this.setState({profile: this.state.profile})
    alert ('Средства успешно переведены')

  }

  addFriend(identifier){
    if (identifier == this.state.profile.identifier){
      alert("Нельзя добавить в список друзей самого себя")
      return
    }

    if (this.checkFriendList(identifier))
    {
      let total = ("Внимание! Человек с идентификатором " + identifier+ " уже добавлен к вам в друзья")
      alert(total)
      return
    }

    let newFritnd = this.checkPeopleList(identifier)
    if (!newFritnd){
      let total = ("Ошибка! Идентификатор " + identifier+ " НЕ НАЙДЕН!");
      alert(total)
      return
    }

    this.state.friends.unshift(newFritnd);
    this.setState({friends: this.state.friends})
    alert("Поздравляем! Вы добавили в свой список друзей нового человека")
  }

  deleteFriend(identifier)
  {

    let index = -1;
    for (let i = 0; i < this.state.friends.length; i++)
      if (this.state.friends[i].identifier == identifier)
      {
        index = i;
        break;
      }
    let total = ("Вы действительно хотите удалить из друзей " + this.state.friends[index].recipient+ "(" + this.state.friends[index].identifier + ")?");
    let deleteFriend = confirm(total);
    if (deleteFriend)
    {
      this.state.friends.splice(index,1);
      this.setState({friends: this.state.friends})
    }
  }

  render() {
    return (
      <Router>
      <Layout>
        <AppHeader profile = {this.state.profile} />
        <Layout>
          <AppSider page ={this.state.page} sum = {this.state.profile.sum} />
          <AppContent content =
            {<Routes>
              <Route path="/" element={<Transfer friends = {this.state.friends} transfer={this.newTransfer} />}/>   
              <Route path="/history" element={<History history = {this.state.history} />}/>
              <Route path="/friends" element={<Friends friends = {this.state.friends}  addFriend = {this.addFriend} deleteFriend = {this.deleteFriend}/>}/>
            </Routes>}
          />
        </Layout>
      </Layout>
      </Router>
    )
  }
}
