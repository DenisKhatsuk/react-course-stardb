import ItemDetails, { Record } from '../item-details';
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
  return (
    <ItemDetails 
      itemId = { itemId } 
      getData = { getPerson }
      getImageUrl = { getPersonImageUrl } >

        <Record field = "gender" label = "Gender:" />
        <Record field = "birthYear" label = "Birth Year:" />
        <Record field = "eyeColor" label = "Eye Color:" />

    </ItemDetails>
  );

};
const PlanetDetails = ({ itemId }) => {
  return (
    <ItemDetails 
      itemId = { itemId } 
      getData = { getPlanet }
      getImageUrl = { getPlanetImageUrl } >

        <Record field = "population" label = "Population:" />
        <Record field = "diameter" label = "Diameter:" />
        <Record field = "rotationPeriod" label = "Rotation period:" />

    </ItemDetails>
  );
  
};
const StarshipDetails = ({ itemId }) => {
  return (
    <ItemDetails
      itemId = { itemId }
      getData = { getStarship }
      getImageUrl = { getStarshipImageUrl }>

        <Record field = "model" label = "Model:" />
        <Record field = "crew" label = "Crew:" />
        <Record field = "passengers" label = "Passengers:" />
        <Record field = "cargoCapacity" label = "Cargo capacity:" />

    </ItemDetails>
  );
};

export {
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
};