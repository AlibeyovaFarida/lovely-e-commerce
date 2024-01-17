import { createSlice } from "@reduxjs/toolkit";
import { userData } from "../services/helpers";
const {jwt} = userData()
console.log(jwt);
const initialState = {
    products: [],
}
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state,action) => {
        const item = state.products.find(item => item.id === action.payload.id)
        if(jwt){
            if(item) {
                item.quantity += action.payload.quantity
            }
            else{
                state.products.push(action.payload)
            }
        }
        else{
            alert("You are not logged in!");
        }
    },
    removeItem: (state,action) => {
        state.products = state.products.filter((item) => item.id!==action.payload)
    },
    increaseItem: (state, {payload}) => {
        const item = state.products.find(item => item.id === payload.id)
        item.quantity +=1;
    },
    decreaseItem: (state, {payload}) => {
        const item = state.products.find((item) => item.id === payload.id);
        if(item.quantity>1){
            item.quantity -= 1;
        }
        else{
            state.products = state.products.filter(
              (item) => item.id !== payload.id
            );
        }
    }
  }
});

export const { addToCart, removeItem, increaseItem, decreaseItem } =
  cartSlice.actions;

export default cartSlice.reducer;
