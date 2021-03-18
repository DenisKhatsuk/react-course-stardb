import React from 'react';

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

const ItemDetails = (props) => {
  const { item, image } = props;
  const { name } = item;
  const itemElement = (
    <React.Fragment>
      <img 
          className="item-image"
          src={ image } 
          alt = "Card item"/>
      <div className="card-body">
        <h4>{ name }</h4>
        <ul className="list-group list-group-flush">
          { 
            React.Children.map(props.children, (child) => {
              return React.cloneElement(child, { item });
            })
          }
        </ul>
      </div>
    </React.Fragment>
  );
    
  return (
    <div className="item-details card">
      { itemElement }
    </div>
  )
};

export default ItemDetails;