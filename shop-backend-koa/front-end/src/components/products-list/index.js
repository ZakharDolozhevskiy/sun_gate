import React, { Component, PropTypes } from 'react';
import Product from './product';

class ProductsList extends Component {
  constructor() {
    super();
    this.state = { clicked: false };
  }

  getClickHandler() {
    this.setState({
      clicked: !this.state.clicked
    });
  }

  render() {
    return (
      <div className="products-list">
        {this.state.clicked ? <span ref = {ref => console.log(ref)}>Clicked!</span> : null}
        <Product onClick = {::this.getClickHandler} />
      </div>
    );
  }
}

ProductsList.propTypes    = {};
ProductsList.defaultProps = {};

export default ProductsList;
