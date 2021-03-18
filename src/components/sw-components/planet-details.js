import React from 'react';
import ItemDetails, { Record } from '../item-details';
import { withDetails, withSwapiService } from '../hoc-helpers';

const PlanetDetails = ({ itemId, swapiService }) => {
  const { getPlanet, getPlanetImageUrl } = swapiService;
  const Planet = withDetails(ItemDetails, itemId, getPlanet, getPlanetImageUrl);
  return (
    <Planet>
      <Record field = "population" label = "Population:" />
      <Record field = "diameter" label = "Diameter:" />
      <Record field = "rotationPeriod" label = "Rotation period:" />
    </Planet>
  );
}

export default withSwapiService(PlanetDetails);
