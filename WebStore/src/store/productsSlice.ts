import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Product{
    stock: string,
    image: string,
    name: string,
    weight: string
}

const initialState: Product[] = []

const productsSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        addToList(state, action: PayloadAction<Product>) {
            state.push(action.payload)
        },
        // removeProduct(state, action: PayloadAction<Product>) {
        //     state.modal = false
        //     payload.payload
        // }
    }
})

export default productsSlice.reducer
export const { addToList } = productsSlice.actions