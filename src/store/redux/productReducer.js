import { createSlice } from "@reduxjs/toolkit";

const product = {
    id: 'sada',
    name: 'Milk',
    price: 12,
    category: 'm'
}

const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: []
    },
    reducers: {
        addProduct(state, action) {
            const n_p = {
                // id: id(),
                ...action.payload
            }
            state.products.push(n_p)
        }

    },
});

export const { } = productsSlice.actions;
export default productsSlice.reducer;

const action = {
    name: 'Milk',
    price: 12,
    category: 'm'
}

const p = {
    id: 1,
    ...action
}