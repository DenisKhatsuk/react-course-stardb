import React, { Component } from 'react';

// import ItemList from '../item-list';
import ItemDetails from '../item-details';
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
    // const itemList = (
    //   <ErrorBoundary>
    //     <ItemList
    //           onItemSelected = { this.onPersonSelected }
    //           getData = { this.swapiService.getAllPeople }
    //     >
    //       {(i) => `${i.name}, born in ${i.birthYear}` } 
    //     </ItemList>
    //   </ErrorBoundary>
    // );
    const { 
      getPerson, 
      getStarship, 
      getPersonImageUrl, 
      getStarshipImageUrl
    } = this.swapiService;
    const peopleDetails = (
      <ErrorBoundary>
        <ItemDetails 
          itemId = { 14 } 
          getData = { getPerson }
          getImageUrl = { getPersonImageUrl } />
      </ErrorBoundary>
    );
    const starshipDetails = (
      <ErrorBoundary>
        <ItemDetails 
          itemId = { 5 }
          getData = { getStarship }
          getImageUrl = { getStarshipImageUrl } />
      </ErrorBoundary>
    );
    return (
      <Row leftElement = { peopleDetails } rightElement = { starshipDetails }/>
    );
  };
}
