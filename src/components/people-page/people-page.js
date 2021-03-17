import React, { Component } from 'react';

// import ItemList from '../item-list';
import ItemDetails, { Record } from '../item-details';
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
          getImageUrl = { getPersonImageUrl } >

            <Record field = "gender" label = "Gender:" />
            <Record field = "birthYear" label = "Birth Year:" />
            <Record field = "eyeColor" label = "Eye Color:" />

        </ItemDetails>
      </ErrorBoundary>
    );
    const starshipDetails = (
      <ErrorBoundary>
        <ItemDetails 
          itemId = { 9 }
          getData = { getStarship }
          getImageUrl = { getStarshipImageUrl }>

            <Record field = "model" label = "Model:" />
            <Record field = "crew" label = "Crew:" />
            <Record field = "passengers" label = "Passengers:" />
            <Record field = "cargoCapacity" label = "Cargo capacity:" />

        </ItemDetails>
      </ErrorBoundary>
    );
    return (
      <Row leftElement = { peopleDetails } rightElement = { starshipDetails }/>
    );
  };
}
