import React from "react"
import { Switch, Route } from "react-router"
import HomePage from "./home"
import RequestsPage from "./requests"
import ProfilePage from "./profile"

export default () => (
  <Switch>
    <Route path="/" exact component={HomePage} />
    <Route path="/requests" component={RequestsPage} />
    <Route path="/profile" component={ProfilePage} />
  </Switch>
)
