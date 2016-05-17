import { ADD_TO_CART, CHANGE_QUANTITY, REMOVE_FROM_CART, EMPTY_CART} from './actionTypes';

export function addToCart(id) {
  return {
    type: ADD_TO_CART,
    payload: id
  }
}

export function changeQuantity(id, quantity) {
    return {
      type: CHANGE_QUANTITY,
      payload: {
        id,
        quantity
      }
    }
}

export function removeFromCart(id) {
  return {
    type: REMOVE_FROM_CART,
    payload: id
  }
}

export function emptyCart() {
  return {
    type: EMPTY_CART
  }
}
