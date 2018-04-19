import React, { Component } from "react"
import { connect } from "react-redux"
import firebase from "../../../firebaseconfig"

class ChatWindow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      chatText: "",
      chatMessages: []
    }
  }

  componentDidMount() {
    const privateChats = firebase.database().ref(this.props.chatType)
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

  textHandler(e) {
    e.preventDefault()
    this.setState({ chatText: e.target.value })
  }
  sendMessage(e) {
    e.preventDefault()
    const sendMessage = firebase
    .database()
    .ref(`${this.props.chatType}` + "/messages")
    .update(
      {
        [Date.now()] : this.state.chatText
      },
      function(err) {
        if (err) {
          alert(err)
        }
      }
    )

  }

  render() {
      console.log(this.props)
    return (
      <div className="chatBoxWindowMain">
        <div className="chatBoxWindowSub" />

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
