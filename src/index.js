import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import App from './App';
import AboutUs from './AboutUs';
import UnknownPage from './UnknownPage';
import 'bootstrap/dist/css/bootstrap.css';

const routing = (
  <Router>
  <div>
  <Switch>

  <Route exact path="/" component={App} />
  <Route path="/aboutus" component={AboutUs} />
  <Route component={UnknownPage} />

  </Switch>
  </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))
