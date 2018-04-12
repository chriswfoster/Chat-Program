import React from "react"
import { Route, Switch } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./store"

import Home from "./components/Home/Home"
import Chat from "./components/Chat/Chat"
import Profile from './components/Profile/Profile'

export default (
  <Provider store={store}>
    <Switch>
      <Route path="/chat" component={Chat} />
      <Route path="/profile" component={Profile} />
      <Route path="/" component={Home} />
    </Switch>
  </Provider>
)
