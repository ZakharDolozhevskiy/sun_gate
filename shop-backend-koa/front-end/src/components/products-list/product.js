import React, { Component, PropTypes } from 'react';

export default function Product(props, context) {
  return (
    <h1 onClick={props.onClick}>Product {context.key}</h1>
  );
}

Product.propTypes = {
  onClick: PropTypes.func
};

Product.contextTypes = {
  key: PropTypes.string
};
