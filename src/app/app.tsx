import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import WebPage from './web/Web';
import ErrorPage from './error/Error';
import Login from './login/Login'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
        <Route exact path="/" component={WebPage} />
        <Route exact path="/login" component={Login} />
        <Route component={ErrorPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
