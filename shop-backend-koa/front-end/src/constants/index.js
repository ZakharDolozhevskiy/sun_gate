function createConstants(...constants) {
  return constants.reduce((acc, constant) =>
    ({ ...acc, [constant]: constant })
  , {});
}

export default createConstants(
  'GET_PRODUCTS_SUCCESS',
  'GET_PRODUCTS_LOADING',
  'GET_PRODUCTS_FAILURE',
  'DEL_PRODUCT_SUCCESS',
  'DEL_PRODUCT_FAILURE',
  'UPDATE_PRODUCT_SUCCESS',
  'UPDATE_PRODUCT_FAILURE'
);
