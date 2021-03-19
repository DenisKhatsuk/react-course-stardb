import React from 'react';

import './header.css';

const Header = ({ onChangeServiceClick }) => {
  return (
    <div className="header d-flex">
      <h3>
        <a href="#_">
          Star DB
        </a>
      </h3>
      <ul className="d-flex">
        <li>
          <a href="#_">People</a>
        </li>
        <li>
          <a href="#_">Planets</a>
        </li>
        <li>
          <a href="#_">Starships</a>
        </li>
      </ul>
      <button 
        className = "btn btn-primary btn-sm"
        onClick = { onChangeServiceClick }>
        Change Service
      </button>
    </div>
  );
};

export default Header;