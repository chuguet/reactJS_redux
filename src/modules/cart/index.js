import {
  ADD_TO_CART,
  CHANGE_QUANTITY,
  REMOVE_FROM_CART,
  EMPTY_CART
} from './actionTypes';

export * from './actions';
export * as selectors from './selectors';

const initialState = { };

function cartReducer(state=initialState, action) {
  switch(action.type) {
    case ADD_TO_CART:
      return addToCart(state, action.payload);
    case CHANGE_QUANTITY:
      return changeQuantity(state, action.payload);
    case REMOVE_FROM_CART:
      return removeFromCart(state, action.payload);
    case EMPTY_CART:
      return {};
    default:
      return state;
  }
}

function addToCart(state, productId) {
  if(typeof state[productId] !== 'undefined') {
    return changeQuantity(state, {
      id: productId,
      quantity: state[productId] + 1
    })
  }

  return {
    ...state,
    [ productId ]: 1
  }
}

function changeQuantity(state, {id, quantity}) {
  return {
    ...state,
    [ id ]: quantity
  }
}

function removeFromCart(state, id) {
  let newState = Object.assign({}, state);
  delete newState[id];
  return newState;
}

export default cartReducer;
