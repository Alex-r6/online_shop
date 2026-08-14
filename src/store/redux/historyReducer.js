import { createSlice } from "@reduxjs/toolkit";

const local_history = JSON.parse(localStorage.getItem('history')) || []

const historySlice = createSlice({
    name: "history",
    initialState: local_history,
    reducers: {
        addToHistory(state,action){
            state.push(action.payload)
        },
        delHistory(state){
            return []
        },
        delOneHistory(state, action){
            return state.filter(elem=> elem.id != action.payload)
        }

    },
});


export const {addToHistory, delHistory, delOneHistory} = historySlice.actions;
export default historySlice.reducer;