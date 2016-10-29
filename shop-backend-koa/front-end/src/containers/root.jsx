import React, { Component, PropTypes } from 'react';
import AppBar                 from 'material-ui/AppBar';
import MenuItem               from 'material-ui/MenuItem';
import Products               from './products';
import IconButton             from 'material-ui/IconButton'
import FlatButton             from 'material-ui/FlatButton';
import { connect }            from 'react-redux';
import ProductAddModal        from '../components/product-modal';
import AddCircleOutline       from 'material-ui/svg-icons/content/add-circle-outline';
import MuiThemeProvider       from 'material-ui/styles/MuiThemeProvider';
import { logout, addProduct } from '../actions'

const dispatchToProps = dispatch => ({
  logout:      () => dispatch(logout()),
  addProduct: product => dispatch(addProduct(product))
});

class Root extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { open: false };
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            title="Cockpit"
            style={{ 'backgroundColor': '#337ab7' }}
            iconElementLeft={<IconButton><AddCircleOutline /></IconButton>}
            iconElementRight={<FlatButton label="Logout" />}
            onRightIconButtonTouchTap={this.props.logout}
            onLeftIconButtonTouchTap={() => this.setState({ open: true })}
          />
          <ProductAddModal
            isOpen={this.state.open}
            onChange={this.props.addProduct}
            modalTitle='Add new product'
            closeModal={() => this.setState({ open: false })}
          />
          <Products/>
        </div>
      </MuiThemeProvider>
    );
  }
}

Root.propTypes = {
  logout: PropTypes.func.isRequired
};

export default connect(null, dispatchToProps)(Root);
