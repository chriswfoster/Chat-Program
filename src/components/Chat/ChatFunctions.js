import React from 'react'
import firebase from "../../firebaseconfig"


const startNewChat = function(otherUser, youruser) {
    const privateChatInitiated = firebase
      .database()
      .ref("privateChats/")
      .push(
        {
          users: { [youruser]: true },
          messages: {},
          title: "New Chat Group"
        },
        function(err) {
          if (err) {
            alert(err)
          }
        }
      )

    firebase
      .database()
      .ref("users/" + youruser + "/privateChats/")
      .update(
        {
          [privateChatInitiated.key]: true
        },
        function(err) {
          if (err) {
            alert(err)
          }
        }
      )
    firebase
      .database()
      .ref("invites/" + otherUser)
      .update({
        [privateChatInitiated.key]: otherUser
      })
  }

 export const userCheck = (youruser) => {
    let username = prompt("Invite a person to chat")
    if (username != null) {
    //   const startNewChat = () => startNewChat(username)
      firebase
        .database()
        .ref("/users/" + username)
        .once("value")
        .then(function(snapshot) {
          if (snapshot.val() === null) {
            alert("UNKNOWN USER")
          } else if (snapshot.val().username) {
            startNewChat(username, youruser)
          }
        })
    }
  }

