import React, { Component } from "react"
import axios from "axios"
import { connect } from "react-redux"
import { login } from "../../../redux/reducer"

class Login extends Component {
  constructor() {
    super()
    this.state = {
      usernameText: "",
      passwordText: ""
    }
  }

  textHandler(property, val) {
    this.setState({ [property]: val })
  }

  render() {
    console.log(this.props)
    const { usernameText, passwordText } = this.state
    return (
      <div>
        <input
          type="text"
          placeholder="Username"
          onChange={e => this.textHandler("usernameText", e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={e => this.textHandler("passwordText", e.target.value)}
        />
        <button
          onClick={() =>
            this.props.login(usernameText.toLowerCase(), passwordText)
          }
        >
          Click
        </button>
        {this.props.redirect}
      </div>
    )
  }
}
const mapStateToProps = state => state
export default connect(mapStateToProps, {
  login
})(Login)
