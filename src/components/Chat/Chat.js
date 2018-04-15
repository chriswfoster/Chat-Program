import React, { Component } from "react"
import { Link } from "react-router-dom"
import firebase from "../../firebaseconfig";
import {connect} from 'react-redux'
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
    
    const randomsRef = firebase.database().ref("publicChats");
    randomsRef.on("value", snapshot => {
      let items = snapshot.val();
      console.log(items)
      let newState = [];
      for (let item in items) {
        newState.push({item: items[item].test});
      }
      this.setState({
        publicChats: newState
      });
    });
  }

  render() {
    const privatechats = this.state.privateChats.map((item, ind) => <p>item.item</p>)
    const publicchats = this.state.publicChats.map((item, ind) => <button className="chatbuttons">Random Chat {ind+1} </button>)
console.log(this.state)
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
const mapStateToProps = state => state
export default connect(mapStateToProps, {

})(Chat)