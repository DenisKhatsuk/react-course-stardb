import React, { Component } from 'react';
import Row from '../../row';
import { PersonList, PersonDetails } from '../../sw-components';

import './people-page.css';

export default class PeoplePage extends Component {

  state = {
    selectedItem: 1,
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
          leftElement = { <PersonList onItemSelected = { this.onItemSelected }/> } 
          rightElement = { <PersonDetails itemId = { selectedItem } /> }/>
        
    );
  };
}
