import Immutable from 'immutable';
import constants from '../constants';


const reducers = {
  [constants.GET_PRODUCTS_SUCCESS]: (state, { payload }) =>
    state ? state.merge(Immutable.List(payload.docs)) : Immutable.List(payload.docs),

  [constants.UPDATE_PRODUCT_SUCCESS]: (state, { payload }) =>
    state.map(obj => obj._id === payload.id ? { ...obj, ...payload } : obj)
};

export default { initState: null, reducers };
