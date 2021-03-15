import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorButton from '../error-button';
import ErrorIndicator from '../error-indicator';
import PeoplePage from '../people-page';

import './app.css';

export default class App extends Component {
  state = {
    showRandomPlanet: true,
    hasError: false,
  };

  componentDidCatch() {
    this.setState({
      hasError: true,
    });
  }

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet,
      };
    });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className = "app">
          <ErrorIndicator />
        </div>
      );
    };
    const randomPlanet = this.state.showRandomPlanet ? 
      <RandomPlanet /> : 
      null;
    return (
      <div className = "app">
        <Header />
        { randomPlanet }
  
        <button
          className="toggle-planet btn btn-warning btn-lg"
          onClick={this.toggleRandomPlanet}>
          Toggle Random Planet
        </button>

        <ErrorButton />
  
        <PeoplePage />
        <PeoplePage />
        <PeoplePage />
      </div>
    );
  };
}
