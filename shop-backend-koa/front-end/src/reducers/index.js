import auth                from './auth'
import products            from './products';
import { combineReducers } from 'redux';

function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    } else {
      return state
    }
  }
}

export default combineReducers({
  auth:     createReducer({}, auth),
  products: createReducer(products.initState, products.reducers)
});
