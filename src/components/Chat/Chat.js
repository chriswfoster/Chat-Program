import React, { Component } from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import PublicChat from "./PublicChat/PublicChat"
import PrivateChat from "./PrivateChat/PrivateChat"
import Profile from "./Profile/Profile"
import ChatWindow from "./ChatWindow/ChatWindow"

import { Tab, Tabs, TabList, TabPanel } from "react-tabs"

import "./chat.css"

class Chat extends Component {
  constructor() {
    super()
    this.state = {
      startChat: false,
      chatIDToStart: "",
      chatType: "privateChats/-LAFNPldT1iC0IpNnbvv/messages"
    }
    this.chatActivator = this.chatActivator.bind(this)
    this.closeChatWindow = this.closeChatWindow.bind(this)
  }

  chatActivator(chattype, chatid) {
    this.setState({
      chatType: `${chattype}/${chatid}/messages`,
      startChat: true
    })
  }

  closeChatWindow() {
    this.setState({ startChat: false })
  }

  render() {
    return (
      <div style={{ backgroundColor: "#4b494f" }}>
        <Link to="/adminconsole"> Jump to admin console </Link>

        {this.state.startChat ? (
          <ChatWindow
            closeChatWindow={this.closeChatWindow}
            chatId={this.state.chatIDToStart}
            chatType={this.state.chatType}
          />
        ) : (
          <div className="chatBox">
            <Tabs defaultIndex={1} onSelect={index => console.log(index)}>
              <TabList>
                <Tab>Private Chats</Tab>
                <Tab>Public Chats</Tab>
                <Tab>Friends</Tab>
                <Tab>Profile</Tab>
              </TabList>
              <TabPanel>
                <PrivateChat chatActivator={this.chatActivator} />
              </TabPanel>
              <TabPanel>
                <PublicChat chatActivator={this.chatActivator} />
              </TabPanel>
              <TabPanel>
                <p>Nothing here.</p>
              </TabPanel>
              <TabPanel>
                <Profile />
              </TabPanel>
            </Tabs>
          </div>
        )}
      </div>
    )
  }
}
const mapStateToProps = state => state
export default connect(mapStateToProps, {})(Chat)
