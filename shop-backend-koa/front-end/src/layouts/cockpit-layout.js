import React, { Component, PropTypes } from 'react';
import ProductsList from '../components/products-list';

class CockpitLayout extends Component {
  render() {
    return (
      <section className="cockpit-layout">
        <ProductsList />
        <div className="controllers">
          <button disabled>Add new</button>
        </div>
      </section>
    );
  }
}

CockpitLayout.propTypes    = {};
CockpitLayout.defaultProps = {};

export default CockpitLayout;
