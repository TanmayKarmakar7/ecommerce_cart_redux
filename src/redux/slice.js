import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
}

const slice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id)

            if (!existingItem) {
                state.items.push({
                    ...action.payload,
                    quantity: 1
                });
            }

            localStorage.setItem("cart", JSON.stringify(state.items))
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id)
            
            localStorage.setItem("cart", JSON.stringify(state.items))
        },
        increaseQuantity: (state, action) => {
            const item = state.items.find(item => item.id === action.payload)

            if(item && item.quantity < item.stock){
                item.quantity += 1
            }

            localStorage.setItem('cart', JSON.stringify(state.items))
        },
        decreaseQuantity: (state, action) => {
            const item = state.items.find(item => item.id === action.payload)

            if(item && item.quantity > 1){
                item.quantity -= 1
            }

            localStorage.setItem('cart', JSON.stringify(state.items))
        },
        clearItems: (state) => {
            state.items = []
            localStorage.removeItem('cart')
        },
        
    }
})

export const { addItem, removeItem, increaseQuantity, decreaseQuantity, clearItems } = slice.actions

export default slice.reducer