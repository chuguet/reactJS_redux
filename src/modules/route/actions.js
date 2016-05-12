export const SET_ROUTE='SET_ROUTE';

function setRoute(route) {
  return {
    type: SET_ROUTE,
    route
  }
}

export function goToCatalog() {
  return setRoute('catalog');
}

export function goToCart() {
  return setRoute('cart');
}
