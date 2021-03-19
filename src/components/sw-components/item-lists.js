import ItemList from '../item-list';
import { withData, withChild, withSwapiService } from '../hoc-helpers';
import compose from '../hoc-helpers/compose';


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

const PersonList = compose(
                    withSwapiService(mapPersonMethods),
                    withData,
                    withChild(renderName)
                  )(ItemList);

const PlanetList = compose(
                    withSwapiService(mapPlanetsMethods),
                    withData,
                    withChild(renderName)
                  )(ItemList);

const StarshipList = compose(
                    withSwapiService(mapStarshipMethods),
                    withData,
                    withChild(renderNameAndModel)
                  )(ItemList);

export {
  PersonList,
  PlanetList,
  StarshipList,
};