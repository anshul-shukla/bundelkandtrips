import React from 'react';
import {ReactDOM, render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './stores/dataStore'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import App from './App';
import About from './components/about';
import Home from './components/home';
import Contact from './components/contact';
import './index.css';

render((
<Provider store={store}>
  <Router history={browserHistory}>
    <Route path="/" component={App} >
	  <IndexRoute component={Home} />
      <Route path="/about" component={About} />
      <Route path="/home" component={Home} />
      <Route path="/contact" component={Contact} />
    </Route>
  </Router>
</Provider>
), document.getElementById('root'))
