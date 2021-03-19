import React, { Component } from 'react';
import Spinner from '../spinner';
import ErrorBoundary from '../error-boundary';
import ErrorIndicator from '../error-indicator';

const withData = (View) => {
  return class extends Component {
    state = {
      data: null,
      isLoading: true,
      error: false,
    };
  
    componentDidMount() {
      this.update();
    }

    componentDidUpdate(prevProps) {
      if (this.props.getData !== prevProps.getData) {
        this.update();
      }
    }

    update() {
      this.setState({
        isLoading: true,
        error: false,
      });
      this.props.getData()
      .then((data) => {
        this.setState({
          data,
          isLoading: false,
        });
      })
      .catch(() => {
        this.setState({
          error: true,
          loading: false,
        });
      });
    }

    render() {
      const { data, isLoading, error } = this.state;

      if (isLoading) return (
        <ul className="item-list list-group">
          <Spinner />
        </ul>
      );

      if (error) return (
        <ul className="item-list list-group">
          <ErrorIndicator />
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