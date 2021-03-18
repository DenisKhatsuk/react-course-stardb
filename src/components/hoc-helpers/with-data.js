import React, { Component } from 'react';
import Spinner from '../spinner';
import ErrorBoundary from '../error-boundary';

const withData = (View) => {
  return class extends Component {
    state = {
      data: null,
    };
  
    componentDidMount() {
      this.props.getData()
        .then((data) => {
          this.setState({
            data,
          });
        });
    }

    render() {
      const { data } = this.state;

      if (!data) return (
        <ul className="item-list list-group">
          <Spinner />
        </ul>
      );

      return (
        <ErrorBoundary>
          <View { ...this.props } data = { data }/>
        </ErrorBoundary>
      );
    }
  };
};

export default withData;