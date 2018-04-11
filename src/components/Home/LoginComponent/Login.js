import React, { Component } from "react"
import axios from 'axios'
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

textHandler(property, val){
    this.setState({[property]: val})
}

sendIt(username, password){
    axios.get(`/api/login/?username=${username}&password=${password}`)
    .then(response => console.log(response))
}

  render() {
      const {usernameText, passwordText} = this.state
    return (
      <div>
        <input placeholder="Username" onChange={(e) => this.textHandler("usernameText", e.target.value)}/>
        <input placeholder="Password" onChange={(e) => this.textHandler("passwordText", e.target.value)}/>
        <button onClick={()=> this.sendIt(usernameText, passwordText)}> Click </button>
      </div>
    )
  }
}
export default Login
