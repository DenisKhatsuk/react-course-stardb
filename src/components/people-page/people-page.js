import React, { Component } from 'react';

import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorButton from '../error-button';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service';
import Row from '../row';

import './people-page.css';

export default class PeoplePage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedPerson: 1,
    hasError: false,
  };

  componentDidCatch() {
    this.setState({
      hasError: true,
    });
  }

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id,
    });
  }; 
  
  render() {
    if (this.state.hasError) {
      return (
        <div className="row mb2">
          <ErrorIndicator />
        </div>
      );
    };

    const itemList = (
      <ItemList
            onItemSelected = { this.onPersonSelected }
            getData = { this.swapiService.getAllPeople }
            renderItem = { ({ name }) => name } />
    );
    const itemDetails = (
      <React.Fragment>
        <PersonDetails personId = { this.state.selectedPerson }/>
        <ErrorButton />
      </React.Fragment>
    );
    return (
      <Row leftElement = { itemList } rightElement = { itemDetails }/>
    );
  };
}
