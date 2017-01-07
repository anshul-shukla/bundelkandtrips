import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import logo from './logo.svg';
import './App.css';

injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
        <div className="App-header">
          <div className="App-logo">B</div>
          <ul className="App-list">
            <li>Home</li>
            <li>Login</li>
          </ul>
        </div>
        <div className="App-intro">
          <form>
            <input type="text" placeholder="Enter Hotel or place name in Bundelkhand e.g. Khajuraho"/>
            <button type="submit">Search</button>
          </form>
        </div>
        <div className="experience-placeholder">
          <div className="experience-header">Experience <span className="bundelkhand">Bundelkhand</span> </div>
          <div className="experienceBox">
                <div className="experienceImageBox">
                    <img src="img/temple1.jpg" />
                </div>
                <div className="experienceTextBox">
                  Experience Orchha Temples
                </div>
          </div>
           <div className="experienceBox">
                <div className="experienceImageBox">
                <img src="img/temple2.jpg" />
                </div>
                <div className="experienceTextBox">
                  Experience Khajuraho Temples
                </div>
          </div>
          </div>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
