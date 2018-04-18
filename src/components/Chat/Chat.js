import React, { Component } from "react"
import { Link } from "react-router-dom"
import firebase from "../../firebaseconfig"
import { connect } from "react-redux"
import PublicChat from './PublicChat/PublicChat'
import {userCheck} from './ChatFunctions'
import "./chat.css"


class Chat extends Component {
  constructor() {
    super()
    this.state = {
      privateChats: [],
      publicChats: []
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
            <button onClick={() => userCheck(this.props.user.username)}> CREATE NEW CHAT </button>
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
