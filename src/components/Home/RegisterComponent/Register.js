import React, { Component } from "react"
import axios from "axios"
import { Redirect } from "react-router-dom"
import { connect } from "react-redux"
import { register } from "../../../redux/reducer"

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      redirect: "",
      passwordText: "",
      usernameText: ""
    }
  }

  handlePasswordText(val) {
    this.setState({ passwordText: val })
  }
  handleUsernameText(val) {
    this.setState({ usernameText: val })
  }

  sendCredentials(username, password) {
    console.log("what is:", username, password)
  }

  render() {
    console.log("props:", this.props)
    console.log(this.state)
    const { register } = this.props
    const {passwordText, usernameText} = this.state
    return (
      <div>
        Register
        <div>
          <input
            type="text"
            placeholder="username"
            onChange={e => this.handleUsernameText(e.target.value)}
          />
          <input
            type="test"
            placeholder="password"
            onChange={e => this.handlePasswordText(e.target.value)}
          />
          <button type="submit" onClick={() => register(usernameText, passwordText)}>
            Submit{" "}
          </button>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => state
export default connect(mapStateToProps, {
  register
})(Register)
