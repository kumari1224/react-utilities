import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loadable from 'react-loadable';

const Loading = ()=><div><center><img  src={ require('./images/avatar_black.gif') } alt="loading" height="100" weight="100" /></center></div>

const RootTableContainer = Loadable({
  loader: () => import('./containers/RootTableContainer'),
  loading: Loading
});

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={RootTableContainer}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
