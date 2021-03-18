import React from 'react';
import ItemDetails, { Record } from '../item-details';
import { withDetails, withSwapiService } from '../hoc-helpers';

const StarshipDetails = ({ itemId, getData, getImageUrl }) => {
  const Starship = withDetails(ItemDetails, itemId, getData, getImageUrl);
  return (
    <Starship>
      <Record field = "model" label = "Model:" />
      <Record field = "crew" label = "Crew:" />
      <Record field = "passengers" label = "Passengers:" />
      <Record field = "cargoCapacity" label = "Cargo capacity:" />
    </Starship>
  );
}

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getStarship,
    getImageUrl: swapiService.getStarshipImageUrl,
  };
};

export default withSwapiService(StarshipDetails, mapMethodsToProps);
