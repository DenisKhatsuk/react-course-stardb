import React from 'react';

const withChild = (child) => (Wrapped) => {
  return (props) => {
    return (
      <Wrapped {...props}>
        { child }
      </Wrapped>
    );
  };
};

export default withChild;