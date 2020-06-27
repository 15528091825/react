import React, { Component } from 'react'
import { HashRouter,Switch, Route, Link,Redirect } from "react-router-dom"
import Nav from "./pages/nav/Nav"
import Login from "./pages/login/Login"
import Reg from "./pages/reg/Reg"
import Forgetpwd from "./pages/forgetpwd/Forgetpwd"
import Error from "./pages/error/Error"
import Selectcity from "./pages/selectcity/Selectcity"
import Search from "./pages/search/Search"
import Map from "./pages/map/Map"
import text from "./pages/text/Text"
export default class App extends Component {
  render() {
    return (
      <div>
          <HashRouter>
            <Switch>
              <Route  path="/"  exact  component={Nav}></Route>
              <Route  path="/login" component={Login}></Route>
              <Route  path="/reg" component={Reg}></Route>
              <Route  path="/forgetpwd" component={Forgetpwd}></Route>
              <Route  path="/selectcity" component={Selectcity}></Route>
              <Route  path="/search" component={Search}></Route>
              <Route  path="/map" component={Map}></Route>
              {/* <Route  path="/text" component={text}></Route> */}
            
              <Redirect from="/*" to="/"></Redirect>
              <Route component={Error}></Route>
            </Switch>
          </HashRouter>
      </div>
   
    )
  }
}
