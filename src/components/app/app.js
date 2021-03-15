import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorButton from '../error-button';
import ErrorIndicator from '../error-indicator';
import PeoplePage from '../people-page';
import SwapiService from '../../services/swapi-service';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

import './app.css';

export default class App extends Component {
  swapiService = new SwapiService();
  
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
        <div className="row mb2">
        <div className="col-md-6">
          <ItemList
            onItemSelected = { this.onPersonSelected }
            getData = { this.swapiService.getAllPlanets }
            renderItem = { ({ name }) => (<span>{name} <button>!</button></span>) } />
        </div>
        <div className="col-md-6">
          <PersonDetails personId = { this.state.selectedPerson }/>
          <ErrorButton />
        </div>
      </div>
      </div>
    );
  };
}
