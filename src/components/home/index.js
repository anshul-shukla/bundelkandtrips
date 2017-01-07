import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'

class Home extends Component {
  render() {
    return (
      <div>
        <div>
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
    );
  }
}

export default Home;
