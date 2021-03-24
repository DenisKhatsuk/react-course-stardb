import React from 'react';
import { withRouter } from 'react-router';
import Row from '../row';
import { PersonList, PersonDetails } from '../sw-components';

const PeoplePage = ({ match, history }) => {
  const { id } = match.params;
  return (
      <Row 
        leftContent = { <PersonList onItemSelected = { (id) => history.push(id) }/> } 
        rightContent = { <PersonDetails itemId = { id } /> }/>
      
  );
}

export default withRouter(PeoplePage);