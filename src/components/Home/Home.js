import React, { Component } from "react"

import Register from "./RegisterComponent/Register"
import Login from "./LoginComponent/Login"
import Guest from "./GuestComponent/Guest"

import { Link, Route, Switch } from "react-router-dom"
import { getProductKey } from "../../redux/reducer"
import {connect} from 'react-redux'

import "./home.css"

class Home extends Component {
  componentDidMount() {
    this.props.getProductKey()
  }
  render() {
    return (
      <div>
        <div className="credBox">
          <div className="credBoxButtons">
            <Link to="/" className="credBoxButtonsLink">
              Guest
            </Link>
            <Link to="/login" className="credBoxButtonsLink">
              Login
            </Link>
            <Link to="/register" className="credBoxButtonsLink">
              Register
            </Link>
          </div>
          <Switch>
            <Route exact path="/" render={() => <Guest />} />
            <Route path="/login" render={() => <Login />} />
            <Route path="/register" render={() => <Register />} />
          </Switch>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => state
export default connect(mapStateToProps, {
  getProductKey
})(Home)
