import React from 'react';
import ItemDetails, { Record } from '../item-details';
import { withDetails, withSwapiService } from '../hoc-helpers';

const PersonDetails = ({ itemId, getData, getImageUrl }) => {
  const Person = withDetails(ItemDetails, itemId, getData, getImageUrl);
  return (
    <Person>
      <Record field = "gender" label = "Gender:" />
      <Record field = "birthYear" label = "Birth Year:" />
      <Record field = "eyeColor" label = "Eye Color:" />
    </Person>
  );
}

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPerson,
    getImageUrl: swapiService.getPersonImageUrl,
  };
};

export default withSwapiService(mapMethodsToProps)(PersonDetails);
