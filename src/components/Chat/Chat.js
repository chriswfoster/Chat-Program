import React, { Component } from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import PublicChat from './PublicChat/PublicChat'
import PrivateChat from './PrivateChat/PrivateChat'
import ChatWindow from './ChatWindow/ChatWindow'

import "./chat.css"


class Chat extends Component {
  constructor() {
    super()
    this.state = {
     startChat: true,
     chatIDToStart: "",
     chatType: "privateChats/-LAFNPldT1iC0IpNnbvv/messages"
    }
  }



  render() {

    return (
      <div>
        <Link to="/profile"> Your Profile </Link>
        <Link to="/adminconsole"> Jump to admin console </Link>
        
          {this.state.startChat ? <ChatWindow chatId={this.state.chatIDToStart} chatType={this.state.chatType} /> : 
          <div className="chatsContainer">
        <div>
          <PrivateChat />
          </div>

          <div >
            <PublicChat />
          </div>
          </div>}
        </div>
      
    )
  }
}
const mapStateToProps = state => state
export default connect(mapStateToProps, {})(Chat)
