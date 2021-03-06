import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './random-planet.css';

export default class RandomPlanet extends Component {
  
  static defaultProps = {
    updateInterval: 100000000000000000,
  };

  static propTypes = {
    updateInterval: PropTypes.number,
  };

  state = {
    planet: {},
    loading: true,
    error: false,
  };

  swapiService = new SwapiService();

  componentDidMount() {
    const { updateInterval } = this.props;
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, updateInterval);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loading: false,
    });
  };

  onError = () => {
    this.setState({
      loading: false,
      error: true,
    });
  };

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 25) + 3;
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  };

  render() {
    const { planet, loading, error } = this.state;
    const hasData = !(error || loading);
    const errorMessage = error ? <ErrorIndicator /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = hasData ? <PlanetView planet = { planet } /> : null;
    return (
      <div className="random-planet jumbotron rounded">
        { errorMessage }
        { spinner }
        { content }
      </div>
    );
  }
}

const PlanetView = ({ planet }) => {
  const {
    id,
    name,
    population,
    diameter,
    rotationPeriod,
  } = planet;
  return (
    <React.Fragment>
      <img 
        className="planet-image"
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} 
        alt = "Random planet"/>
        <div>
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>{population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>{rotationPeriod}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>{diameter}</span>
            </li>
          </ul>
        </div>
    </React.Fragment>
  );
};