import { createSlice } from "@reduxjs/toolkit";

export const getProductsSlice = createSlice({
  name: "products",
  initialState: { products: [] },
  reducers: {
    getAll: (state, action) => {
      console.log("get all", state.products, action);
    //   state.products = [...new Set([ ...state.products,...action.payload])];
        state.products=action.payload
    },
    editOne: (state, action) => {
        const items = state.products
       const item= items.find(item=>item.id===action.payload.id)
       item.body=action.payload.description
       item.title=action.payload.title
    },
  },
});

export const { getAll, editOne } = getProductsSlice.actions;

export const productsList = (state) => state.productslist.products;

export default getProductsSlice.reducer;
