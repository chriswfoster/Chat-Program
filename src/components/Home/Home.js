import React, { Component } from "react"
import { Link, Route, Switch } from "react-router-dom"

import Register from "./RegisterComponent/Register"
import Login from "./LoginComponent/Login"
import Guest from './GuestComponent/Guest'

import './home.css'

class Home extends Component {
  render() {
    return (
      <div>
        <div className="credBox">
          <div className="credBoxButtons">
            <Link to="/" className="credBoxButtonsLink">Guest</Link>
            <Link to="/login" className="credBoxButtonsLink">Login</Link>
            <Link to="/register" className="credBoxButtonsLink">Register</Link>
          </div>
          <Switch>
              <Route exact path="/" render={()=> <Guest />} />
            <Route path="/login" render={() => <Login />} />
            <Route path="/register" render={() => <Register />} />
          </Switch>
        </div>
      </div>
    )
  }
}
export default Home
