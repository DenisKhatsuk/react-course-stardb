import React from 'react';

const withChild = (Wrapped, child) => {
  return (props) => {
    return (
      <Wrapped {...props}>
        { child }
      </Wrapped>
    );
  };
};

export default withChild;