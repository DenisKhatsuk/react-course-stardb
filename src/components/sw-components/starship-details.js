import React from 'react';
import ItemDetails, { Record } from '../item-details';
import { withDetails, withSwapiService } from '../hoc-helpers';

const StarshipDetails = ({ itemId, swapiService }) => {
  const { getStarship, getStarshipImageUrl } = swapiService;
  const Starship = withDetails(ItemDetails, itemId, getStarship, getStarshipImageUrl);
  return (
    <Starship>
      <Record field = "model" label = "Model:" />
      <Record field = "crew" label = "Crew:" />
      <Record field = "passengers" label = "Passengers:" />
      <Record field = "cargoCapacity" label = "Cargo capacity:" />
    </Starship>
  );
}

export default withSwapiService(StarshipDetails);
