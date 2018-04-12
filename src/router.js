import React from "react"
import { Route, Switch } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./store"

import Home from "./components/Home/Home"
import Chat from "./components/Chat/Chat"

export default (
  <Provider store={store}>
    <Switch>
      <Route path="/chat" component={Chat} />
      <Route path="/" component={Home} />
    </Switch>
  </Provider>
)
