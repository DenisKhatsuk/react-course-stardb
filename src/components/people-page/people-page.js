import React, { Component } from 'react';
import ErrorBoundary from '../error-boundary';
import SwapiService from '../../services/swapi-service';
import Row from '../row';
import {
  PersonList, 
  PlanetList, 
  StarshipList,
  PersonDetails, 
  PlanetDetails, 
  StarshipDetails,
} from '../sw-components';

import './people-page.css';

export default class PeoplePage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedPerson: 1,
    selectedPlanet: 3,
    selectedStarship: 5,
  };

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id,
    });
  }; 
  
  onPlanetSelected = (id) => {
    this.setState({
      selectedPlanet: id,
    });
  }; 
  
  onStarshipSelected = (id) => {
    this.setState({
      selectedStarship: id,
    });
  }; 
  
  render() {
    const itemList = (
      <ErrorBoundary>
        <PersonList>
          { (i) => `${i.name}, born in ${i.birthYear}` } 
        </PersonList>

        <PlanetList>
          { (i) => i.name } 
        </PlanetList>
        
        <StarshipList>
          { (i) => i.name } 
        </StarshipList>
      </ErrorBoundary>
    );
    const itemDetails = (
      <ErrorBoundary>
        <PersonDetails itemId = { this.state.selectedPerson } />
        <PlanetDetails itemId = { this.state.selectedPlanet } />
        <StarshipDetails itemId = { this.state.selectedStarship } />
      </ErrorBoundary>
    );
    return (
      <Row leftElement = { itemList } rightElement = { itemDetails }/>
    );
  };
}
