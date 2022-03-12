import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items:[],
}

export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers:{
        //Actions
        addToBasket:(state,action)=>{
            state.items = [...state.items, action.payload]
        },
        removeFromBasket: (state,action)=>{
            const index = state.items.findIndex(basketItem => basketItem.id === action.payload.id)
            let newBasket = [...state.items];
            if(index>=0){
                // The item exists in the basket. Remove it...
                // At position index in the array removes 1 item
                // Don't use filter or it will remove all the items with the id
                newBasket.splice(index,1)
            }
            else{
                // Product does not exists
                console.warn(`Caanot remove the product with the id ${action.payload.id} as it does not exists`);
            }
            state.items = newBasket
        },
    },
});

export const {addToBasket, removeFromBasket} = basketSlice.actions;

// Selectors - This is how we pull information from the Global slice
// export const selectItems = (state) => state.basket.items;

export default basketSlice.reducer;