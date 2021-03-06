import React, { Component } from "react"
import { connect } from "react-redux"
import firebase from "../../../firebaseconfig"
import { userCheck } from "../ChatFunctions"

class PrivateChat extends Component {
  constructor() {
    super()
    this.state = {
      privateChats: []
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

  render() {
    const privatechats = this.state.privateChats.map((item, ind) => (
      <button
        key={ind}
        className="chatbuttons"
        onClick={() => this.props.chatActivator("privateChats", item.key)}
      >
        <p>{item.key}</p>
      </button>
    ))

    return (
        
      <div className="chatItemsMain">
        <p>Your private/group chats</p>
        <button onClick={() => userCheck(this.props.user.username)}>
          CREATE NEW CHAT
        </button>
        <div className="chatItems">
        {privatechats}
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => state
export default connect(mapStateToProps, {})(PrivateChat)
