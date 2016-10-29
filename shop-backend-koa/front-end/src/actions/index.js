import fetch     from 'isomorphic-fetch';
import constants from '../constants';

function toJSON(response) { return response.json(); }

export function logout() {
  return dispatch => {
    fetch(`http://localhost:3000/auth/logout`)
      .then(response => response.ok ?
        dispatch({ type: constants.LOGOUT_SUCCESS }) : Promise.reject()
      ).catch(err => console.log(err));
  };
}

export function getProducts(page = 1) {
  return dispatch => {
    dispatch({ type: constants.GET_PRODUCTS_LOADING });
    fetch(`http://localhost:3000/products?page=${page}`).then(toJSON)
      .then(payload => dispatch({ type: constants.GET_PRODUCTS_SUCCESS, payload }))
      .catch(() => dispatch({ type: constants.GET_PRODUCTS_FAILURE }));
  };
}

export function addProduct(product) {
  const fetchOptions = { method: 'POST', credentials: 'include', body: product };

  return dispatch => {
    fetch(`http://localhost:3000/products`, fetchOptions).then(toJSON)
      .then(payload => dispatch({ type: constants.ADD_PRODUCT_SUCCESS, payload }))
      .catch(() => dispatch({ type: constants.ADD_PRODUCT_FAILURE }));
  };
}

export function delProduct(id) {
  const fetchOptions = { method: 'DELETE', credentials: 'include' };

  return dispatch => {
    fetch(`http://localhost:3000/products/${id}`, fetchOptions)
      .then(() => dispatch({ type: constants.DEL_PRODUCT_SUCCESS, payload: id }))

  };
}

export function saveProduct(id, product) {
  const fetchOptions = { method: 'PUT', credentials: 'include', body: product };

  return dispatch => {
    fetch(`http://localhost:3000/products/${id}`, fetchOptions).then(toJSON)
      .then(payload => dispatch({ type: constants.UPDATE_PRODUCT_SUCCESS, payload }))
      .catch(() => dispatch({ type: constants.UPDATE_PRODUCT_FAILURE }));
  };
}
