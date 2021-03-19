import React, { Component } from 'react';
import Row from '../../row';
import { StarshipList, StarshipDetails } from '../../sw-components';

import './starships-page.css';

export default class StarshipsPage extends Component {

  state = {
    selectedItem: 9,
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
          leftElement = { <StarshipList onItemSelected = { this.onItemSelected }/> } 
          rightElement = { <StarshipDetails itemId = { selectedItem } /> }/>
        
    );
  };
}
