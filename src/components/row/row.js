import React from 'react';
import PropTypes from 'prop-types';

import ErrorBoundary from '../error-boundary';

import './row.css';

const Row = ({ leftContent, rightContent }) => {
  return (
    <div className="row mb2">
      <div className="col-md-6">
        <ErrorBoundary>
          { leftContent }
        </ErrorBoundary>
      </div>
      <div className="col-md-6">
        <ErrorBoundary>
          { rightContent }
        </ErrorBoundary>
      </div>
    </div>
  );
};

Row.propTypes = {
  leftContent: PropTypes.node,
  rightContent: PropTypes.node,
};

export default Row;