import { configureStore } from '@reduxjs/toolkit'
import modalSlice from './modalSlice'
import productsSlice from './productsSlice'

const store = configureStore({
  reducer: {
    modal: modalSlice,
    products: productsSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store