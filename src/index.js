import SwapiService from './services/swapi-service';

const swapi = new SwapiService();

swapi.getAllPeople()
  .then((body) => {
    body.forEach(p => console.log(p.name));
  })
  .catch((err) => {
    console.error(err);
  });

swapi.getPerson(5)
  .then(p => console.log(p.name));