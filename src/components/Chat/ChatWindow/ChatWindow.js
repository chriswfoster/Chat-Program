import React, { Component } from "react"
import { connect } from "react-redux"
import firebase from "../../../firebaseconfig"
import Moment from "react-moment"
import "moment-timezone"
const moment = require("moment")

class ChatWindow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      chatText: "",
      chatMessages: []
    }
  }

  componentDidMount() {
    var elmnt = document.getElementById("content");
    const privateChats = firebase.database().ref(this.props.chatType)
    privateChats.on("value", snapshot => {
      let items = snapshot.val()
      console.log(items)
      let privateState = []
      for (let item in items) {
        if (items[item].user) {
          privateState.push({
            user: items[item].user,
            time: [item],
            text: items[item].text
          })
        }
      }
      
      this.setState({
          chatMessages: privateState
        }, () => elmnt.scrollIntoView()) 
      
    })
  }

  textHandler(e) {
    e.preventDefault()
    this.setState({ chatText: e.target.value })
  }

  sendMessage(e) {
    let date = Date.now() + ""
    date = date.substring(0, date.length - 3)
    e.preventDefault()
    e.target.reset()
    const sendMessage = firebase
      .database()
      .ref(`${this.props.chatType}`)
      .update(
        {
          [date]: {
            text: this.state.chatText,
            user: this.props.user.username
          }
        },
        function(err) {
          if (err) {
            alert(err)
          }
        },
      )
      
  }

  render() {
    console.log("props:", this.props, "state:", this.state)
    console.log(moment())
    const chatBody = this.state.chatMessages
      .map(item => (
        <div>
          <p>
            {item.user}
            {" {"}
            <Moment unix fromNow>
              {item.time}
            </Moment>
            {"}: "}
            {item.text}
          </p>
        </div>
      ))
    return (
      <div className="chatBoxWindowMain">
        <div className="chatBoxWindowSub">{chatBody}
        <div id="content">
  </div>
        </div>

        <form onSubmit={e => this.sendMessage(e)}>
          <input onChange={e => this.textHandler(e)} />
          <input type="submit" text="SUBMIT" />
        </form>
      </div>
    )
  }
}
const mapStateToProps = state => state
export default connect(mapStateToProps, {})(ChatWindow)
