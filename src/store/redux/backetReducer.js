import { createSlice } from "@reduxjs/toolkit";

const backet = JSON.parse(localStorage.getItem('backet_products') || '{}')

const backetSlice = createSlice({
    name: "backet",
    initialState: backet,
    reducers: {
        addToNewBacket(state,action){
            const id = action.payload
            if(state[id]) {
                state[id].quantity += 1
            } else {
                state[id] = {quantity: 1}
            }
        },
        removeAllProductsFromBacket(state){
            return {}
        },
        plusOneProductBacket(state, action){
            const id = action.payload
            state[id].quantity += 1
        },
        delOneProductBacket(state, action){
            const id = action.payload
            delete state[id]
        },
        minusOneProductBacket(state, action){
            const id = action.payload
            if(state[id].quantity <= 1) {
                delete state[id]
            }else{
                state[id].quantity -= 1
            }
        },
        buyFromBacket(state){
            return {}
        }
    },
});


export const {addToNewBacket, removeAllProductsFromBacket, plusOneProductBacket, minusOneProductBacket, delOneProductBacket, buyFromBacket} = backetSlice.actions;
export default backetSlice.reducer;
