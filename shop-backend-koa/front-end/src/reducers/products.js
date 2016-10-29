import Immutable from 'immutable';
import constants from '../constants';

const initState = Immutable.Map({ 'items': Immutable.List(), loading: true });

const reducers = {
  [constants.GET_PRODUCTS_LOADING]: state => {
    return state.merge({ loading: true });
  },

  [constants.GET_PRODUCTS_SUCCESS]: (state, { payload }) => {
    return state.merge({
      page:    payload.page,
      items:   state.get('items').merge(Immutable.List(payload.docs)),
      pages:   payload.pages,
      loading: false
    });
  },

  [constants.UPDATE_PRODUCT_SUCCESS]: (state, { payload }) =>
    state.merge({
      items: state.get('items').map(obj => (obj._id === payload._id) ? payload : obj)
    }),

  [constants.ADD_PRODUCT_SUCCESS]: (state, { payload }) =>
    state.merge({ items: state.get('items').push(payload) }),

  [constants.DEL_PRODUCT_SUCCESS]: (state, { payload: id }) =>
    state.merge({
      items: state.get('items').filter(obj => obj._id !== id)
  })
};

export default { initState, reducers };
