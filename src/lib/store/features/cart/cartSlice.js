// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//     items: [],
// };

// export const cartSlice = createSlice({
//     name: 'cart',
//     initialState,
//     reducers: {
//         add: (state, action) => {
//             state.items.push(action.payload);
//         },
//         remove:(state,action)=>{
//             state.items = state.items.filter((item) => item.id !== action.payload);

//         }
//     },
// });

// // Action creators are generated for each case reducer function
// export const { add,remove } = cartSlice.actions;

// export default cartSlice.reducer;


import { createSlice } from "@reduxjs/toolkit"

const initialState={
    items:[]
};
  
export const  cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        add:(state,action)=>{
            const existingItem=state.items.find(item => item.id === action.payload.id);
           
            if (existingItem) {
                existingItem.quantity += 1;
              } else {
                state.items.push({ ...action.payload, quantity: 1 });
              }
        },
        remove: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
          },
          incrementQuantity: (state, action) => {
            const item = state.items.find(item => item.id === action.payload);
            if (item) {
              item.quantity += 1;
            }
          },
          decrementQuantity: (state, action) => {
            const item = state.items.find(item => item.id === action.payload);
            if (item && item.quantity > 1) {
              item.quantity -= 1;
            } else {
              state.items = state.items.filter(item => item.id !== action.payload);
            }
          },

    }
})

export const { add,remove,incrementQuantity,decrementQuantity } = cartSlice.actions;

export default cartSlice.reducer;

