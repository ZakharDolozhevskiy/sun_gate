import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { connect } from 'react-redux';
import Products from './products';

class Root extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar title="Cockpit"/>
          <Products/>
        </div>
      </MuiThemeProvider>
    );
  }
}

Root.propTypes = {};

export default Root;
