import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorButton from '../error-button';
import ErrorIndicator from '../error-indicator';
import ErrorBoundary from '../error-boundary';
import PeoplePage from '../people-page';
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';
import { SwapiServiceProvider } from '../swapi-service-context';

import './app.css';

export default class App extends Component {
  
  state = {
    showRandomPlanet: true,
    hasError: false,
    service: new DummySwapiService(),
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

  changeService = () => {
    this.setState(({ service }) => {
      const Service = service instanceof SwapiService ? 
                        DummySwapiService : SwapiService;
      return {
        service: new Service(),
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
    // const randomPlanet = this.state.showRandomPlanet ? 
    //   <RandomPlanet /> : 
    //   null;
    return (
      <div className = "stardb-app">
        <ErrorBoundary>
            <SwapiServiceProvider value = { this.state.service }>
              <Header onChangeServiceClick = { this.changeService } />
              {/* { randomPlanet }
        
              <button
                className="toggle-planet btn btn-warning btn-lg"
                onClick={this.toggleRandomPlanet}>
                Toggle Random Planet
              </button>

              <ErrorButton /> */}
        
              <PeoplePage />
          </SwapiServiceProvider>
        </ErrorBoundary>
      </div>
    );
  };
}
