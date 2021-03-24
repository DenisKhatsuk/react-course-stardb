import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorIndicator from '../error-indicator';
import ErrorBoundary from '../error-boundary';
import {
  LoginPage, 
  PeoplePage, 
  PlanetsPage, 
  SecretPage, 
  StarshipsPage,
} from '../pages';
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';
import { SwapiServiceProvider } from '../swapi-service-context';
import {  StarshipDetails } from '../sw-components';

import './app.css';

export default class App extends Component {
  
  state = {
    hasError: false,
    service: new SwapiService(),
    isLoggedIn: false,
  };

  onLogin = () => {
    this.setState({ 
      isLoggedIn: true,
    });
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

    const { isLoggedIn } = this.state; 
   
    return (
      <ErrorBoundary>
        <SwapiServiceProvider value = { this.state.service }>
          <Router>
            <div className = "stardb-app container">
              <Header onChangeServiceClick = { this.changeService } />
              <RandomPlanet />
              
              <Switch>
                <Route 
                  path = "/" 
                  render = { () => <h2>Welcome to Star DB</h2> }
                  exact />
                <Route path = "/people/:id?" component = { PeoplePage } />
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
                <Route 
                  path = "/login" 
                  render = { () => ( 
                    <LoginPage 
                      isLoggedIn = { isLoggedIn }
                      onLogin = { this.onLogin } />
                  ) } />
                <Route 
                  path = "/secret" 
                  render = { () => ( 
                    <SecretPage 
                      isLoggedIn = { isLoggedIn } />
                  ) } />
                <Route render = { () => <h2>Page not found</h2> } />
              </Switch>
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundary>
    );
  };
}
