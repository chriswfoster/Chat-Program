import React, { Component } from "react"

import Register from "./RegisterComponent/Register"
import Login from "./LoginComponent/Login"
import Guest from "./GuestComponent/Guest"

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
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
