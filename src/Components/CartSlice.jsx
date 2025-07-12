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
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload)
        },

        clearCart(state) {
            state.cartItems = [];
        },

        incrementItemQuantity(state, action) {
            console.log(state.cartItems);
            console.log(action.payload);
            const itemQuantityIncrease = state.cartItems.find(item => item.id === action.payload);
            if(itemQuantityIncrease) {
                itemQuantityIncrease.quantity += 1
            }
        },

        decrementItemQuantity(state, action) {
            const itemQuantityDecrease = state.cartItems.find(item => item.id === action.payload);
            if(itemQuantityDecrease && itemQuantityDecrease.quantity > 1) {
                itemQuantityDecrease.quantity -= 1
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

