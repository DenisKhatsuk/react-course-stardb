import ItemList from '../item-list';
import { withData, withChild, withSwapiService } from '../hoc-helpers';


const renderName = i => i.name;
const renderNameAndModel = (i) => {
  return <span>{i.name}, Model: {i.model}</span>;
}

const mapPersonMethods = (swapiService) => {
  return {
    getData: swapiService.getAllPeople,
  }
}

const mapPlanetsMethods = (swapiService) => {
  return {
    getData: swapiService.getAllPlanets,
  }
}

const mapStarshipMethods = (swapiService) => {
  return {
    getData: swapiService.getAllStarships,
  }
}

const PersonList = withSwapiService(
                      withData(withChild(ItemList,renderName)), 
                      mapPersonMethods);
const PlanetList = withSwapiService(
                      withData(withChild(ItemList,renderName)), 
                      mapPlanetsMethods);
const StarshipList = withSwapiService(
                      withData(withChild(ItemList,renderNameAndModel)), 
                      mapStarshipMethods);

export {
  PersonList,
  PlanetList,
  StarshipList,
};