import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import template1 from './../../img/temple1.jpg';
import template2 from './../../img/temple3.jpg';


class Home extends Component {
  render() {
    return (
      <div>
        <div className="home">
        <form>
            <input type="text" placeholder="Enter Hotel or place name in Bundelkhand e.g. Khajuraho"/>
            <button type="submit">Search</button>
          </form>
        </div>
        <div className="experience-placeholder">
          <div className="experience-header">Experience <span className="bundelkhand">Bundelkhand</span> </div>
          <div className="experienceBox">
                <div className="experienceImageBox">
                    <img src={template1} height="250" className="templeImg"/>
                </div>
                <div className="experienceTextBox">
                   Orchha Temples
                </div>
          </div>
          <div className="experienceBox">
                <div className="experienceImageBox">
                    <img src={template1} height="250" className="templeImg"/>
                </div>
                <div className="experienceTextBox">
                   Orchha Temples
                </div>
          </div>
          <div className="experienceBox">
                <div className="experienceImageBox">
                    <img src={template1} height="250" className="templeImg"/>
                </div>
                <div className="experienceTextBox">
                   Orchha Temples
                </div>
          </div>
           <div className="experienceBox">
                <div className="experienceImageBox">
                <img src={template2} height="250" className="templeImg"/>
                </div>
                <div className="experienceTextBox">
                   Khajuraho Temples
                </div>
          </div>
          </div>
      </div>
    );
  }
}

export default Home;
