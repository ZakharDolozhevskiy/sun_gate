import fetch from 'isomorphic-fetch';
import constants from '../constants';

function toJSON(response) { return response.json(); }

export function getProducts() {
  return dispatch => {
    fetch('http://localhost:3000/products').then(toJSON)
      .then(payload => dispatch({ type: constants.GET_PRODUCTS_SUCCESS, payload }))
      .catch(() => dispatch({ type: constants.GET_PRODUCTS_FAILURE }));
  };
}

export function delProduct(id) {
  const fetchOptions = { method: 'DELETE', credentials: 'include' };

  return dispatch => {
    fetch(`http://localhost:3000/products/${id}`, fetchOptions)
      .then(response => dispatch(getProducts()))
      .catch(() => dispatch({ type: constants.DEL_PRODUCT_FAILURE }));
  };
}

export function saveProduct(id, product) {
  const fetchOptions = { method: 'PUT', credentials: 'include', body: JSON.stringify(product) };

  return dispatch => {
    fetch(`http://localhost:3000/products/${id}`, fetchOptions)
      .then(response => dispatch({
        type:    constants.UPDATE_PRODUCT_SUCCESS,
        payload: { id, ...product }
      }))
      .catch(() => dispatch({ type: constants.UPDATE_PRODUCT_FAILURE }));
  };
}
