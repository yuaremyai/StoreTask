import { configureStore } from '@reduxjs/toolkit'
import modalSlice from './reducers/modalSlice'
import productsSlice from './reducers/productsSlice'
import commentsSlice from './reducers/commentsSlice'

const store = configureStore({
  reducer: {
    modal: modalSlice,
    products: productsSlice,
    comments: commentsSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store