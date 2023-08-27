import { createSlice } from "@reduxjs/toolkit";

const cartItems = createSlice({
    name: "favdataStore",
    initialState: {
        cartData: [],
        cartDetails: []
    },
    reducers: {
        addCartData: (state: any, action: any) => {
            const index = state.cartData.find((value: any) => value?.id === action.payload.id)
            if (!index) {
                state.cartData.push(action?.payload)
            }
        },
        deleteCartData: (state: any, action: any) => {
            const index = state.cartData.filter((value: any) => value.id !== action.payload)
            state.cartData.splice(index, 1)
        },
        cartDetailsData: (state: any, action: any) => {
            const index = state.cartDetails.find((value: any) => value?.id === action.payload.id)
            if (!index) {
                state.cartDetails.push(action?.payload)
            }
        },
        cartRemoveData: (state: any, action: any) => {
            const index = state.cartDetails.filter((value: any) => value.id !== action.payload)
            state.cartDetails.splice(index, 1)
        },
    },
});
export const { addCartData, deleteCartData, cartDetailsData, cartRemoveData } = cartItems.actions
export default cartItems.reducer;