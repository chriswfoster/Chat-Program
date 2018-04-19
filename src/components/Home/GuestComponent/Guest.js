import React, { Component } from "react"
import axios from "axios"
import { guestSignIn } from "../../../redux/reducer"
import { connect } from "react-redux"

class Guest extends Component {
  constructor(props) {
    super(props)
    this.state = {
      guestNameText: ""
    }
  }
  guestNameHandler(val) {
    this.setState({ guestNameText: val })
  }

  sendGuestName(username) {
    this.props.guestSignIn(username)
  }

  render(props) {
    console.log(this.props)
    return (
      <div className="signinMain">
        <div className="signinItemsFlex">
          <p>Guest Signin </p>
          <input
            type="text"
            placeholder="Guest name"
            onChange={e => this.guestNameHandler(e.target.value)}
          />
          <input
            type="submit"
            onClick={() => this.sendGuestName(this.state.guestNameText)}
          />
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => state
export default connect(mapStateToProps, {
  guestSignIn
})(Guest)
