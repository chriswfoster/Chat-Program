import React, { Component } from "react"
import { Link } from "react-router-dom"
import firebase from "../../firebaseconfig"
import { connect } from "react-redux"
import PublicChat from './PublicChat/PublicChat'
import "./chat.css"


class Chat extends Component {
  constructor() {
    super()
    this.state = {
      privateChats: [],
      publicChats: []
    }
  }

  componentDidMount() {
    const privateChats = firebase.database().ref("privateChats")
    privateChats.on("value", snapshot => {
      let items = snapshot.val()
      console.log(items)
      let privateState = []
      for (let item in items) {
        if (items[item].users && items[item].users[this.props.user.username]) {
          privateState.push({ title: items[item].title, key: [item] })
        }
      }
      this.setState({
        privateChats: privateState
      })
    })
  }

  startNewChat(otherUser) {
    const privateChatInitiated = firebase
      .database()
      .ref("privateChats/")
      .push(
        {
          users: { [this.props.user.username]: true },
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
      .ref("users/" + this.props.user.username + "/privateChats/")
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

  userCheck() {
    let username = prompt("Invite a person to chat")
    if (username != null) {
      const startNewChat = () => this.startNewChat(username)
      firebase
        .database()
        .ref("/users/" + username)
        .once("value")
        .then(function(snapshot) {
          if (snapshot.val() === null) {
            alert("UNKNOWN USER")
          } else if (snapshot.val().username) {
            startNewChat(username)
          }
        })
    }
  }

  render() {
 
    const privatechats = this.state.privateChats.map((item, ind) => (
      <button key={ind} className="chatbuttons">
        <p>{item.title}</p>
        <p>{item.key}</p>
      </button>
    ))
  

    return (
      <div>
        <Link to="/profile"> Your Profile </Link>
        <Link to="/adminconsole"> Jump to admin console </Link>
        <div className="chatsContainer">
          <div className="chatItems">
            <p>Your private/group chats</p>
            <button onClick={() => this.userCheck()}> CREATE NEW CHAT </button>
            {privatechats}
          </div>

          <div >
            <PublicChat />
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => state
export default connect(mapStateToProps, {})(Chat)
