import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';

import './person-details.css';

export default class PersonDetails extends Component {
  swapiService = new SwapiService();

  state = {
    person: null,
    isUpdating: false,
  };

  componentDidMount() {
    this.updatePerson();
  }
  
  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this.setState({
        isUpdating: true,
      });
      this.updatePerson();
    }
  }

  updatePerson() {
    const { personId } = this.props;
    if (!personId) return;

    this.swapiService
      .getPerson(personId)
      .then((person) => {
        this.setState({
          person,
          isUpdating: false,
        });
      });
  }

  render() {
    if (!this.state.person) {
      return (
        <span>Please select a character from the list</span>
      );
    };
    const spinner = this.state.isUpdating ? <Spinner /> : null;
    const personContent = !this.state.isUpdating ? 
      <PersonContent person = {this.state.person} /> : 
      null;
    return (
      <div className="person-details card">
        { spinner }
        { personContent }
      </div>
    )
  }
}

const PersonContent = (props) => {
  const { 
    id,
    name,
    gender,
    birthYear,
    eyeColor,
  } = props.person;
  return (
    <React.Fragment>
      <img 
          className="person-image"
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} 
          alt = "Star wars character"/>
      <div className="card-body">
        <h4>{ name }</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Gender</span>
            <span>{ gender }</span>
          </li>
          <li className="list-group-item">
            <span className="term">Birth Year</span>
            <span>{ birthYear }</span>
          </li>
          <li className="list-group-item">
            <span className="term">Eye Color</span>
            <span>{ eyeColor }</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};
