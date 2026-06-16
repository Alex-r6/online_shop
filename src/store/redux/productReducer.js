import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: JSON.parse(localStorage.getItem('products')) || [],
        backet: JSON.parse(localStorage.getItem('backet_products')) || [],
    },
    reducers: {
        addProduct(state, action) {
            const exists = state.products.some(
                elem => elem.name.toLowerCase() === action.payload.name.toLowerCase()
            )

            if(exists)return 

            const new_product = {
                ...action.payload
            }
            state.products.push(new_product)
            
        },
        addToBacket(state, action){
            const id = action.payload
            const product = state.products.find(
                elem => String(elem.id) === String(id)
            )
        
            const basketProduct = state.backet.find(
                item => String(item.id) === String(id)
            )

            if(basketProduct){
                    basketProduct.quantity += 1
            }else if (product) {
                state.backet.push({
                    ...product,
                })
            }
        
            
        },
        removeProduct(state, action){
            const index = state.products.findIndex((elem)=> elem.id === action.payload)
            state.products.splice(index,1)
        },
        removeProductFromBacket(state, action){
            const index = state.backet.findIndex((elem)=> elem.id === action.payload)
            const index_prod = state.products.findIndex((elem)=> elem.id === action.payload)
            state.backet.splice(index,1)
            state.products[index_prod].quantity = 1
        },
        removeAllBasket(state){
            state.backet = []
            state.products.forEach(elem => {elem.quantity = 1});
        },
        removeAllProducts(state){
            state.products = []
            state.backet = []
        },
        addOneCount(state,action){
            const product_bak= state.backet.find((elem)=> elem.id === action.payload)
            if(product_bak){
                product_bak.quantity += 1
            }
        },
        minusOneCount(state,action){
            const index = state.backet.findIndex((elem)=> elem.id === action.payload)
            const product = state.backet[index]

            if(product){
                product.quantity -= 1

                if(product.quantity === 0){
                    state.backet.splice(index,1)
                }
            }

        }

    },
});


export const {addProduct, addToBacket,removeProduct, removeProductFromBacket, removeAllBasket, removeAllProducts, addOneCount, minusOneCount } = productsSlice.actions;
export default productsSlice.reducer;



const arr =[12,2,3,4,5,6,7]
arr.splice(2,1)