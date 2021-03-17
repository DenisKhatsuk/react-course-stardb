import React, { Component } from 'react';

import ItemList from '../item-list';
import ItemDetails, { Record } from '../item-details';
import ErrorBoundary from '../error-boundary';
import SwapiService from '../../services/swapi-service';
import Row from '../row';

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
        <ItemList
              onItemSelected = { this.onPersonSelected }
              getData = { this.swapiService.getAllPeople }
        >
          { (i) => `${i.name}, born in ${i.birthYear}` } 
        </ItemList>
        <ItemList
              onItemSelected = { this.onPlanetSelected }
              getData = { this.swapiService.getAllPlanets }
        >
          { (i) => i.name } 
        </ItemList>
      </ErrorBoundary>
    );
    const { 
      getPerson, 
      getPlanet, 
      // getStarship, 
      getPersonImageUrl, 
      getPlanetImageUrl, 
      // getStarshipImageUrl
    } = this.swapiService;
    const peopleDetails = (
      <ErrorBoundary>
        <ItemDetails 
          itemId = { this.state.selectedPerson } 
          getData = { getPerson }
          getImageUrl = { getPersonImageUrl } >

            <Record field = "gender" label = "Gender:" />
            <Record field = "birthYear" label = "Birth Year:" />
            <Record field = "eyeColor" label = "Eye Color:" />

        </ItemDetails>
        <ItemDetails 
          itemId = { this.state.selectedPlanet } 
          getData = { getPlanet }
          getImageUrl = { getPlanetImageUrl } >

            <Record field = "population" label = "Population:" />
            <Record field = "diameter" label = "Diameter:" />
            <Record field = "rotationPeriod" label = "Rotation period:" />

        </ItemDetails>
      </ErrorBoundary>
    );
    // const starshipDetails = (
    //   <ErrorBoundary>
    //     <ItemDetails 
    //       itemId = { 9 }
    //       getData = { getStarship }
    //       getImageUrl = { getStarshipImageUrl }>

    //         <Record field = "model" label = "Model:" />
    //         <Record field = "crew" label = "Crew:" />
    //         <Record field = "passengers" label = "Passengers:" />
    //         <Record field = "cargoCapacity" label = "Cargo capacity:" />

    //     </ItemDetails>
    //   </ErrorBoundary>
    // );
    return (
      <Row leftElement = { itemList } rightElement = { peopleDetails }/>
    );
  };
}
