import ItemList from '../item-list';
import { withData, withChild } from '../hoc-helpers';
import SwapiService from '../../services/swapi-service';

const swapiService = new SwapiService();

const {
  getAllPeople,
  getAllPlanets,
  getAllStarships,
} = swapiService;

const renderName = i => i.name;
const renderNameAndModel = (i) => {
  return <span>{i.name}, Model: {i.model}</span>;
}

const PersonList = withData(
                    withChild(ItemList,renderName), 
                    getAllPeople);
const PlanetList = withData(
                    withChild(ItemList,renderName), 
                    getAllPlanets);
const StarshipList = withData(
                    withChild(ItemList,renderNameAndModel), 
                    getAllStarships);

export {
  PersonList,
  PlanetList,
  StarshipList,
};