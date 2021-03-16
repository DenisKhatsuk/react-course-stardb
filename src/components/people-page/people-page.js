import React, { Component } from 'react';

import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorButton from '../error-button';
import ErrorBoundary from '../error-boundary';
import SwapiService from '../../services/swapi-service';
import Row from '../row';

import './people-page.css';

export default class PeoplePage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedPerson: 1,
  };

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id,
    });
  }; 
  
  render() {
    const itemList = (
      <ErrorBoundary>
        <ItemList
              onItemSelected = { this.onPersonSelected }
              getData = { this.swapiService.getAllPeople }
        >
          {(i) => `${i.name}, born in ${i.birthYear}` } 
        </ItemList>
      </ErrorBoundary>
    );
    const itemDetails = (
      <ErrorBoundary>
        <PersonDetails personId = { this.state.selectedPerson }/>
        <ErrorButton />
      </ErrorBoundary>
    );
    return (
      <Row leftElement = { itemList } rightElement = { itemDetails }/>
    );
  };
}
