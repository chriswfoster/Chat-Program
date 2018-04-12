import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./chat.css"

class Chat extends Component {
  constructor() {
    super()
    this.state = {
      privateChats: [],
      publicChats: []
    }
  }

  componentDidMount() {}

  render() {
    const privatechats = this.state.privateChats.map(item => item)
    const publicchats = this.state.publicChats.map(item => item)

    return (
      <div>
        <Link to="/profile"> Your Profile </Link>
        <Link to="/adminconsole"> Jump to admin console </Link>
        <div className="chatsContainer">
          <div className="chatItems">
            <p>Your private/group chats</p>
            {privatechats}
            <button> Private message someone</button>
          </div>

          <div className="chatItems">
            <p>Public Chats</p>
            {publicchats}
          </div>
        </div>
      </div>
    )
  }
}
export default Chat
