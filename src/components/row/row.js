import React from 'react';
import ErrorBoundary from '../error-boundary';

const Row = ({ leftElement, rightElement }) => {
  return (
    <div className="row mb2">
      <div className="col-md-6">
        <ErrorBoundary>
          { leftElement }
        </ErrorBoundary>
      </div>
      <div className="col-md-6">
        <ErrorBoundary>
          { rightElement }
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default Row;