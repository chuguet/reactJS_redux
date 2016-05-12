import { SAVE_PRODUCTS } from './actions';
export * from './actions';

export default function catalog(state=[], action) {
  switch (action.type) {
    case SAVE_PRODUCTS:
      return action.payload;
    default:
      return state;
  }
}
