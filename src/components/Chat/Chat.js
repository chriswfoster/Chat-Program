import React, { Component } from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import PublicChat from './PublicChat/PublicChat'
import PrivateChat from './PrivateChat/PrivateChat'

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
 
  

    return (
      <div>
        <Link to="/profile"> Your Profile </Link>
        <Link to="/adminconsole"> Jump to admin console </Link>
        <div className="chatsContainer">
        <div>
          <PrivateChat />
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
