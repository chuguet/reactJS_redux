export const SAVE_PRODUCTS = 'SAVE_PRODUCTS';

export function saveProducts(products) {
  return {
    type: SAVE_PRODUCTS,
    payload: products
  }
}
