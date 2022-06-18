import { configureStore } from '@reduxjs/toolkit';
import products from './reducers/getProduct';

export default configureStore({
  reducer: {
    productslist: products,
  },
});
