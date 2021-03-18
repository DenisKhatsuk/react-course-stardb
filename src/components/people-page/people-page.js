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
    selectedPlanet: 1,
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
        <PersonDetails itemId = { 2 } />
        <PlanetDetails itemId = { 5 } />
        <StarshipDetails itemId = { 5 } />
      </ErrorBoundary>
    );
    return (
      <Row leftElement = { itemList } rightElement = { itemDetails }/>
    );
  };
}
