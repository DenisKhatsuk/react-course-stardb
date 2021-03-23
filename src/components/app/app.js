import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorIndicator from '../error-indicator';
import ErrorBoundary from '../error-boundary';
import PeoplePage from '../pages/people-page';
import PlanetsPage from '../pages/planets-page';
import StarshipsPage from '../pages/starships-page';
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';
import { SwapiServiceProvider } from '../swapi-service-context';
import { StarshipList, StarshipDetails } from '../sw-components';

import './app.css';

export default class App extends Component {
  
  state = {
    hasError: false,
    service: new SwapiService(),
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
      <ErrorBoundary>
        <SwapiServiceProvider value = { this.state.service }>
          <Router>
            <div className = "stardb-app">
              <Header onChangeServiceClick = { this.changeService } />
              <RandomPlanet />

              <Route 
                path = "/" 
                render = { () => <h2>Welcome to Star DB</h2> }
                exact />
              <Route 
                path = "/people/" 
                render = { () => <h2>Star wars characters</h2> }
                exact />
              <Route path = "/people/" component = { PeoplePage } />
              <Route path = "/planets/" component = { PlanetsPage } />
              <Route 
                path = "/starships/" 
                component = { StarshipsPage } 
                exact />
              <Route 
                path = "/starships/:id" 
                render = { ({ match }) => {
                  const { id } = match.params;
                  return <StarshipDetails itemId = { id }/>
                } } />

            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundary>
    );
  };
}
