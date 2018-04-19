import React, { Component } from "react"

import Register from "./RegisterComponent/Register"
import Login from "./LoginComponent/Login"
import Guest from "./GuestComponent/Guest"

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { Link, Route, Switch } from "react-router-dom"
import { getProductKey } from "../../redux/reducer"
import { Redirect } from "react-router-dom"
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
          {/* <div className="credBoxButtons"> */}

          <Tabs defaultIndex={1} onSelect={index => console.log(index)}>
  <TabList>
    <Tab>Guest</Tab>
    <Tab>Login</Tab>
    <Tab>Register</Tab>
  </TabList>
  <TabPanel><Guest /></TabPanel>
  <TabPanel><Login /></TabPanel>
  <TabPanel><Register /></TabPanel>
</Tabs>
            {/* <Link to="/" className="credBoxButtonsLink">
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
          </Switch> */}
        </div>
        {this.props.user.username ? <Redirect to="/chat" />: null}
      </div>
    )
  }
}
const mapStateToProps = state => state
export default connect(mapStateToProps, {
  getProductKey
})(Home)
