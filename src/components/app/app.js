import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorIndicator from '../error-indicator';
import ErrorBoundary from '../error-boundary';
import PeoplePage from '../pages/people-page';
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';
import { SwapiServiceProvider } from '../swapi-service-context';

import './app.css';

export default class App extends Component {
  
  state = {
    hasError: false,
    service: new DummySwapiService(),
  };

  componentDidCatch() {
    this.setState({
      hasError: true,
    });
  }

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
        <div className = "stardb-app">
          <ErrorIndicator />
        </div>
      );
    };
   
    return (
      <div className = "stardb-app">
        <ErrorBoundary>
            <SwapiServiceProvider value = { this.state.service }>
              <Header onChangeServiceClick = { this.changeService } />
              
              <RandomPlanet />
              
              <PeoplePage />

          </SwapiServiceProvider>
        </ErrorBoundary>
      </div>
    );
  };
}
