import React from 'react';
import ItemDetails, { Record } from '../item-details';
import { withDetails } from '../hoc-helpers';
import SwapiService from '../../services/swapi-service';

const swapiService = new SwapiService();

const { 
      getPerson, 
      getPlanet, 
      getStarship, 
      getPersonImageUrl, 
      getPlanetImageUrl, 
      getStarshipImageUrl
    } = swapiService;

const PersonDetails = ({ itemId }) => {
  const Person = withDetails(ItemDetails, itemId, getPerson, getPersonImageUrl);
  return (
    <Person>
      <Record field = "gender" label = "Gender:" />
      <Record field = "birthYear" label = "Birth Year:" />
      <Record field = "eyeColor" label = "Eye Color:" />
    </Person>
  );
}

const PlanetDetails = ({ itemId }) => {
  const Planet = withDetails(ItemDetails, itemId, getPlanet, getPlanetImageUrl);
  return (
    <Planet>
      <Record field = "population" label = "Population:" />
      <Record field = "diameter" label = "Diameter:" />
      <Record field = "rotationPeriod" label = "Rotation period:" />
    </Planet>
  );
}

const StarshipDetails = ({ itemId }) => {
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

export {
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
};