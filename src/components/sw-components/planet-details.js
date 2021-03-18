import React from 'react';
import ItemDetails, { Record } from '../item-details';
import { withDetails, withSwapiService } from '../hoc-helpers';

const PlanetDetails = ({ itemId, getData, getImageUrl }) => {
  const Planet = withDetails(ItemDetails, itemId, getData, getImageUrl);
  return (
    <Planet>
      <Record field = "population" label = "Population:" />
      <Record field = "diameter" label = "Diameter:" />
      <Record field = "rotationPeriod" label = "Rotation period:" />
    </Planet>
  );
}

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPlanet,
    getImageUrl: swapiService.getPlanetImageUrl,
  };
};

export default withSwapiService(PlanetDetails, mapMethodsToProps);
