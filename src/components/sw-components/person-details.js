import React from 'react';
import ItemDetails, { Record } from '../item-details';
import { withDetails, withSwapiService } from '../hoc-helpers';

const PersonDetails = ({ itemId, swapiService }) => {
  const { getPerson, getPersonImageUrl } = swapiService;
  const Person = withDetails(ItemDetails, itemId, getPerson, getPersonImageUrl);
  return (
    <Person>
      <Record field = "gender" label = "Gender:" />
      <Record field = "birthYear" label = "Birth Year:" />
      <Record field = "eyeColor" label = "Eye Color:" />
    </Person>
  );
}

export default withSwapiService(PersonDetails);
