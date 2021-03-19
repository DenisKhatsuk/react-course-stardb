import React, { Component } from 'react';
import Row from '../../row';
import { PlanetList, PlanetDetails } from '../../sw-components';

import './planets-page.css';

export default class PlanetsPage extends Component {

  state = {
    selectedItem: 2,
  };

  onItemSelected = (id) => {
    this.setState({
      selectedItem: id,
    });
  }; 
  
  render() {
    const { selectedItem } = this.state;

    return (
        <Row 
          leftElement = { <PlanetList onItemSelected = { this.onItemSelected }/> } 
          rightElement = { <PlanetDetails itemId = { selectedItem } /> }/>
        
    );
  };
}
