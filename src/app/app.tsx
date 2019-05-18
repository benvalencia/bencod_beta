import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Web from './web/Web'
import Login from './login/Login'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
        <Route exact path="/" component={Web} />
        <Route exact path="/login" component={Login} />
        <Route component={Web} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
