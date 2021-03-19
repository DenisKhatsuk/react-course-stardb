import React, { Component } from 'react';
import Spinner from '../spinner';

const withDetails = (View, itemId, getData, getImageUrl) => {
  return class extends Component {
    state = {
      item: null,
      itemId: null,
      image: null,
      isUpdating: false,
    };
  
    componentDidMount() {
      this.updateItem();
    }
    
    componentDidUpdate(prevProps) {
      if (this.props.itemId !== prevProps.itemId || 
        this.props.getData !== prevProps.getData ||
        this.props.getImageUrl !== prevProps.getImageUrl) {
        this.setState({
          isUpdating: true,
        });
        this.updateItem();
      }
    }
  
    updateItem() {
      if (!itemId) return;
  
      getData(itemId)
        .then((item) => {
          this.setState({
            item,
            itemId,
            image: getImageUrl(item),
            isUpdating: false,
          });
        });
    }

    render() {
      const {
        item,
        image,
        isUpdating,
      } = this.state;

      if (!item) {
        return (
          <span>Please select a character from the list</span>
        );
      };
      if (isUpdating) {
        return (
          <div className="item-details card">
            <Spinner />
          </div>
        );
      }
      return (
        <View {...this.props} item = { item } image = { image } />
      );
    }
  }
}

export default withDetails;