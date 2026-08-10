import { createSlice } from "@reduxjs/toolkit";

const local_history = JSON.parse(localStorage.getItem('history')) || []

const historySlice = createSlice({
    name: "history",
    initialState: local_history,
    // initialState: [{
    //     id: 1,
    //     globalPrice: 12000,
    //     date : 'UNIX',
    //     product:[{
    //         id: '55ffa36c-bec4-4ca0-8379-9b3b0940b61e',
    //         name: "iPhone 15 Pro",
    //         buyPrice: 1200,
    //         quantity: 10
    //     }]
    // }],
    reducers: {
        addToHistory(state,action){
            state.push(action.payload)
        }
    },
});


export const {addToHistory} = historySlice.actions;
export default historySlice.reducer;