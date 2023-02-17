import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../types";

interface ProductState {
  products: IProduct[];
}

const initialState: ProductState = {
  products: [],
};

const compare = function(x: any, y: any){
  return x > y ? 1 : x < y ? -1 : 0; 
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

    sortList(state, action: PayloadAction<keyof IProduct>) {
      state.products.sort((a, b) => {
        return compare( 
            [compare(a[action.payload], b[action.payload]), compare(a.stock, b.stock)], 
            [compare(b[action.payload], a[action.payload]), compare(b.stock, a.stock)]
        );
      })
    },

    setProducts(state, action: PayloadAction<IProduct[]>) {
      state.products = [...action.payload]
    },
    
    editListElement(state, action: PayloadAction<IProduct>) {
      state.products = state.products.filter((element) => element.id !== action.payload.id)
      state.products.push(action.payload)
      console.log(state.products)
    }
  },
});

export default productsSlice.reducer;
export const { addToList, deleteFromList, sortList, setProducts, editListElement } = productsSlice.actions;
