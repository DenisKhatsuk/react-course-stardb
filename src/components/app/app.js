import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorButton from '../error-button';

import './app.css';

export default class App extends Component {
  state = {
    showRandomPlanet: true,
    selectedPerson: 1,
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet,
      };
    });
  };

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id,
    });
  }; 
  
  render() {
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
  
        <div className="row mb2">
          <div className="col-md-6">
            <ItemList onItemSelected = { this.onPersonSelected }/>
          </div>
          <div className="col-md-6">
            <PersonDetails personId = { this.state.selectedPerson }/>
          </div>
        </div>
      </div>
    );
  };
}
