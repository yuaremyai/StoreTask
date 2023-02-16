import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../types";

interface ProductState {
  products: IProduct[];
}

const initialState: ProductState = {
  products: [],
};

const productsSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToList(state, action: PayloadAction<IProduct>) {
      state.products.push(action.payload);
    },
    deleteFromList(state, action: PayloadAction<number>) {
      state.products = state.products.filter(
        (element) => element.id !== action.payload
      );
    },
  },
});

export default productsSlice.reducer;
export const { addToList, deleteFromList } = productsSlice.actions;
