import React, { Component } from "react"
import axios from 'axios'
import {Redirect} from 'react-router-dom'

class Register extends Component {
    constructor(){
        super()
        this.state ={
            redirect: "",
            passwordText: "",
            usernameText: ""
        }
    }

    handlePasswordText(val){
        this.setState({passwordText: val})
    }
    handleUsernameText(val){
        this.setState({usernameText: val})
    }

    sendCredentials(username, password){
        console.log("what is:", username, password)
        axios.post('/api/register', {
            username,
            password
        })
        .then(response => {
            this.setState({redirect: <Redirect to="" />})
        })
    }


  render() {
      console.log(this.state)
    return (
      <div>
        Register
        <form onSubmit={()=> this.sendCredentials(this.state.usernameText, this.state.passwordText)}>
          <input type="text" placeholder="username" onChange={(e)=> this.handleUsernameText(e.target.value)}/>
          <input type="test"placeholder="password" onChange={(e)=> this.handlePasswordText(e.target.value)}/>
        <input type="submit" />
        </form>
      </div>
    )
  }
}
export default Register
