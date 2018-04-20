import React, { Component } from "react"
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

  login(usernameText, passwordText){
    this.props.login(usernameText.toLowerCase(), passwordText)
    let input1 = document.getElementById("input1")
    let input2 = document.getElementById("input2")
    input1.value=""
    input2.value=""
  }

  render() {
    console.log(this.props)
    const { usernameText, passwordText } = this.state
    return (
      <div className="signinMain">
        <div className="signinItemsFlex">
          <p>Login Below</p>
          <input
          id="input1"
            type="text"
            placeholder="Username"
            onChange={e => this.textHandler("usernameText", e.target.value)}
          />
          <input
          id="input2"
            type="password"
            placeholder="Password"
            onChange={e => this.textHandler("passwordText", e.target.value)}
          />
          <button
            onClick={() =>
              this.login(usernameText, passwordText)
            }
          >
            Submit
          </button>
          {this.props.redirect}
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => state
export default connect(mapStateToProps, {
  login
})(Login)
