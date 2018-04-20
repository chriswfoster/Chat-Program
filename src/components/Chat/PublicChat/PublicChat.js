import React, { Component } from "react"
import firebase from "../../../firebaseconfig"
import { connect } from "react-redux"

class PublicChat extends Component {
  constructor() {
    super()
    this.state = {
      publicChats: []
    }
  }

  componentDidMount() {
    const randomsRef = firebase.database().ref("publicChats")
    randomsRef.on("value", snapshot => {
      let items = snapshot.val()
      console.log(items)
      let newState = []
      for (let item in items) {
        newState.push({ name: [item], item: items[item].test })
      }
      this.setState({
        publicChats: newState
      })
    })
  }

  render() {
    const publicchats = this.state.publicChats.map((item, ind) => (
      <button
        key={ind}
        className="chatbuttons"
        onClick={() => this.props.chatActivator("publicChats", item.name)}
      >
        <p>{item.name}</p>
      </button>
    ))
    return (
      <div className="chatItemsMain">
        <p>Public Chats</p>
        <div className="chatItems">{publicchats}</div>
      </div>
    )
  }
}
const mapStateToProps = state => state
export default connect(mapStateToProps, {})(PublicChat)
