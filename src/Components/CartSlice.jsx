import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    cartItems: [],
  };

const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCartItem(state, action) {
            const existingItem = state.cartItems.find((item) => item.id === action.payload.id);

            if(existingItem) {
                existingItem.quantity += 1
            } else {
                state.cartItems.push({...action.payload, quantity: 1});
            }
        
        },

        deleteItemFromCart(state, action) {
            state.cartItems.filter((item) => item.id !== action.payload.id)
        },

        clearCart(state) {
            state.cartItems = [];
        },

        incrementItemQuantity(state, action) {
            const itemQuantiyIncrease = state.cartItems.find((item) => item.id === action.payload.id);
            if(itemQuantiyIncrease) {
                itemQuantiyIncrease.quantity += 1
            }
        },

        decrementItemQuantity(state, action) {
            const itemQuantiyDecrease = state.cartItems.find((item) => item.id === action.payload.id);
            if(itemQuantiyDecrease && itemQuantiyDecrease > 1) {
                itemQuantiyDecrease.quantity -= 1
            }
        }

    }
});

export const {
    addCartItem,
    deleteItemFromCart,
    clearCart,
    incrementItemQuantity,
    decrementItemQuantity
} = CartSlice.actions;

export default CartSlice.reducer;

