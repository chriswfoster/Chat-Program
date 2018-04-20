import React, { Component } from "react"
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

  register(usernameText, passwordText, imageText) {
    this.props.register(usernameText.toLowerCase(), passwordText, imageText)
    let input3 = document.getElementById("input3")
    let input4 = document.getElementById("input4")
    let input5 = document.getElementById("input5")
    input3.value=""
    input4.value=""
    input5.value=""
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
            id="input3"
            type="text"
            placeholder="username"
            onChange={e => this.handleUsernameText(e.target.value)}
          />
          <input
            id="input4"
            type="password"
            placeholder="password"
            onChange={e => this.handlePasswordText(e.target.value)}
          />
          <input
            id="input5"
            type="text"
            placeholder="ImageUrl (optional)"
            onChange={e => this.handleImageText(e.target.value)}
          />
          <button
            type="submit"
            onClick={() =>
              this.props.register(usernameText, passwordText, imageText)
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
