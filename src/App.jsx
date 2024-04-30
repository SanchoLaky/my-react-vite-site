import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import React, { useState } from "react"

import { Layout } from "antd"

import Transfer from "./Pages/Transfer"
import History from "./Pages/History"
import Friends from "./Pages/Friends"

import AppHeader from "./components/layout/AppHeader"
import AppSider from "./components/layout/AppSider"
import AppContent from "./components/layout/AppContent"

import dateFriends from "./date/DateFriends.json"
import datePeople from "./date/DatePeople.json"
import dateProfile from "./date/DateProfile.json"
import dateHistory from "./date/DateHistory.json"

export default function App() {
  const [friends, setFriends] = useState(dateFriends)
  const [people] = useState(datePeople)
  const [profile] = useState(dateProfile)
  const [history] = useState(dateHistory)
  const [sumProfile, setSumProfile] = useState(dateProfile.sum)

  const checkPeopleList = (identifier) => {
    for (let i = 0; i < people.length; i++)
      if (people[i].identifier == identifier) return people[i]
    return null
  }

  const checkFriendList = (identifier) => {
    for (let i = 0; i < friends.length; i++)
      if (friends[i].identifier == identifier) return friends[i]
    return null
  }

  const addHistory = (identifier, recipient, sum) => {
    history.unshift({
      key: history.length + 1,
      recipient: recipient,
      identifier: identifier,
      date: new Date().toLocaleDateString(),
      sum: sum,
    })
  }

  const newTransfer = (identifiers, sum) => {
    for (let i = 0; i < identifiers.length; i++)
      if (identifiers[i] == profile.identifier) {
        let total =
          "Пожалуйста, уберите свой идентификатор (" +
          profile.identifier +
          ") из списка получателей!"
        alert(total)
        return
      }
    if (identifiers.length * sum > profile.sum) {
      alert("Недостаточно средств для перевода")
      return
    }

    let correctRecipients = []
    let errorRecipients = []
    for (let i = 0; i < identifiers.length; i++) {
      let recipient = checkPeopleList(identifiers[i])
      if (recipient) correctRecipients.push(recipient)
      else errorRecipients.push(identifiers[i])
    }
    if (errorRecipients.length > 0) {
      let total =
        "Ошибка! Следующие идентификаторы не найдены в системе: " +
        errorRecipients
      alert(total)
      return
    }
    let stringRecipients = ""
    for (let i = 0; i < correctRecipients.length; i++)
      stringRecipients +=
        correctRecipients[i].recipient +
        "(" +
        correctRecipients[i].identifier +
        ") "
    let total =
      "Вы подтверждаете перевод на общую сумму " +
      sum * correctRecipients.length +
      " следующим людям " +
      stringRecipients +
      "?"
    let transfer = confirm(total)

    if (!transfer) {
      alert("Отмена перевода")
      return
    }

    for (let i = 0; i < correctRecipients.length; i++) {
      addHistory(
        correctRecipients[i].identifier,
        correctRecipients[i].recipient,
        sum
      )
    }
    setSumProfile(sumProfile - sum * correctRecipients.length)
    alert("Средства успешно переведены")
  }

  const addFriend = (identifier) => {
    if (identifier == profile.identifier) {
      alert("Нельзя добавить в список друзей самого себя")
      return
    }

    if (checkFriendList(identifier)) {
      let total =
        "Внимание! Человек с идентификатором " +
        identifier +
        " уже добавлен к вам в друзья"
      alert(total)
      return
    }

    let newFritnd = checkPeopleList(identifier)
    if (!newFritnd) {
      let total = "Ошибка! Идентификатор " + identifier + " НЕ НАЙДЕН!"
      alert(total)
      return
    }
    let newFriends = [...friends]
    newFriends.unshift(newFritnd)
    setFriends(newFriends)
    alert("Поздравляем! Вы добавили в свой список друзей нового человека")
  }

  const deleteFriend = (identifier) => {
    let index = -1
    for (let i = 0; i < friends.length; i++)
      if (friends[i].identifier == identifier) {
        index = i
        break
      }
    let total =
      "Вы действительно хотите удалить из друзей " +
      friends[index].recipient +
      "(" +
      friends[index].identifier +
      ")?"
    let deleteFriend = confirm(total)
    if (deleteFriend) {
      let newFriends = [...friends]
      newFriends.splice(index, 1)
      setFriends(newFriends)
    }
  }
  return (
    <Router>
      <Layout>
        <AppHeader profile={profile} />
        <Layout>
          <AppSider sum={sumProfile} />
          <AppContent
            content={
              <Routes>
                <Route
                  path="/"
                  element={
                    <Transfer friends={friends} transfer={newTransfer} />
                  }
                />
                <Route
                  path="/history"
                  element={<History history={history} />}
                />
                <Route
                  path="/friends"
                  element={
                    <Friends
                      friends={friends}
                      addFriend={addFriend}
                      deleteFriend={deleteFriend}
                    />
                  }
                />
              </Routes>
            }
          />
        </Layout>
      </Layout>
    </Router>
  )
}
