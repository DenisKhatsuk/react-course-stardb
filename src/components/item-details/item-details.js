import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';

import './item-details.css';

const Record = ({ field, label, item }) => {
  return (
    <li className="list-group-item">
      <span className="term">{ label }</span>
      <span>{ item[field] }</span>
    </li>
  );
};

export {
  Record,
};

export default class ItemDetails extends Component {
  
  swapiService = new SwapiService();

  state = {
    item: null,
    image: null,
    isUpdating: false,
  };

  componentDidMount() {
    this.updateItem();
  }
  
  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.setState({
        isUpdating: true,
      });
      this.updateItem();
    }
  }

  updateItem() {
    const { itemId, getData, getImageUrl } = this.props;
    if (!itemId) return;

    getData(itemId)
      .then((item) => {
        this.setState({
          item,
          image: getImageUrl(item),
          isUpdating: false,
        });
      });
  }

  render() {
    const { item, image } = this.state;
    if (!this.state.item) {
      return (
        <span>Please select a character from the list</span>
      );
    };
    const { name } = item;
    const itemElement = (
      <React.Fragment>
        <img 
            className="item-image"
            src={ image } 
            alt = "Star wars character"/>
        <div className="card-body">
          <h4>{ name }</h4>
          <ul className="list-group list-group-flush">
            { 
              React.Children.map(this.props.children, (child) => {
                return React.cloneElement(child, { item });
              })
            }
          </ul>
        </div>
      </React.Fragment>
    );
    const spinner = this.state.isUpdating ? <Spinner /> : null;
    const content = !this.state.isUpdating ? itemElement : null;
    return (
      <div className="item-details card">
        { spinner }
        { content }
      </div>
    )
  }
}
