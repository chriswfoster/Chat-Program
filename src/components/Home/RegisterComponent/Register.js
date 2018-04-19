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
      usernameText: "",
      imageText: ""
    }
  }

  handlePasswordText(val) {
    this.setState({ passwordText: val })
  }
  handleUsernameText(val) {
    this.setState({ usernameText: val })
  }
  handleImageText(val) {
    this.setState({ imageText: val })
  }

  render() {
    console.log("props:", this.props)
    console.log(this.state)

    const { passwordText, usernameText, imageText } = this.state
    return (
      <div className="signinMain">
        <div className="signinItemsFlex">
          <p> Register</p>
          <input
            type="text"
            placeholder="username"
            onChange={e => this.handleUsernameText(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            onChange={e => this.handlePasswordText(e.target.value)}
          />
          <input
            type="text"
            placeholder="ImageUrl (optional)"
            onChange={e => this.handleImageText(e.target.value)}
          />
          <button
            type="submit"
            onClick={() =>
              this.props.register(
                usernameText.toLowerCase(),
                passwordText,
                imageText
              )
            }
          >
            Submit
          </button>
        </div>
        {this.props.redirect}
      </div>
    )
  }
}
const mapStateToProps = state => state
export default connect(mapStateToProps, {
  register
})(Register)
