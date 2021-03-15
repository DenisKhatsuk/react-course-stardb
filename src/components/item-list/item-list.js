import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';

import './item-list.css';

export default class ItemList extends Component {

  state = {
    peopleList: null,
  };

  swapiService = new SwapiService();
  
  componentDidMount() {
    this.swapiService.getAllPeople()
      .then((peopleList) => {
        this.setState({
          peopleList,
        });
      });
  }

  renderItems(arr) {
    return arr.map((item) => {
      return (
        <li className="list-group-item"
            key = { item.id }
            onClick = { () => this.props.onItemSelected(item.id) }>
          { item.name }
        </li>
      );
    });
  }

  render() {
    const { peopleList } = this.state;
    if (!peopleList) return (
      <ul className="item-list list-group">
        <Spinner />
      </ul>
    );

    const items = this.renderItems(peopleList);

    return (
      <ul className="item-list list-group">
        { items }
      </ul>
    );
  }
}
