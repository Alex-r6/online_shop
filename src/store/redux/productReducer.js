import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: JSON.parse(localStorage.getItem('products')) || [
            {
                id: '55ffa36c-bec4-4ca0-8379-9b3b0940b61e',
                name: "iPhone 15 Pro",
                price: 1200,
                category: "Electronics",
                quantity: 1,
                discount : 10,
            },
            {
                discount : 10,
                id: '55ffa36c-bec4-4ca0-8379-9b3b0940b62e',
                name: "Samsung Galaxy S24 Ultra",
                price: 1100,
                category: "Electronics",
                quantity: 1
            },
            {
                discount : 10,
                id: '55ffa36c-bec4-4ca0-8379-9b3b0940b63e',
                name: "Xiaomi 14 Pro",
                price: 800,
                category: "Electronics",
                quantity: 1
            },
            {
                  discount : 10,
                  id: '55ffa36c-bec4-4ca0-8379-9b3b0940b64e',
                  name: "Big Mac",
                  price: 5,
                  category: "food",
                  quantity: 1
                },
                
                {
                    discount : 10,
                    id: '55ffa36c-bec4-4ca0-8379-9b3b0940b65e',
                    name: "Pizza Margherita",
                    price: 12,
                    category: "food",
                    quantity: 1
                },
                {
                  discount : 10,
                  id: '55ffa36c-bec4-4ca0-8379-9b3b0940b67e',
                  name: "Sushi Set",
                  price: 25,
                  category: "food",
                  quantity: 1
                },
                {
                    discount : 10,
                    id: '55ffa36c-bec4-4ca0-8379-9b3b0940b68e',
                    name: "Office Chair",
                    price: 150,
                    category: "furniture",
                    quantity: 1
                },
                {
                  discount : 10,
                  id: '55ffa36c-bec4-4ca0-8379-9b3b0940b69e',
                  name: "Wooden Table",
                  price: 300,
                  category: "furniture",
                  quantity: 1
                },
                {
                  discount : 10,
                  id: '55ffa36c-bec4-4ca0-8379-9b3b0940b71e',
                  name: "Sofa 3-Seater",
                  price: 700,
                  category: "furniture",
                  quantity: 1
                }
        ],
        // backet: JSON.parse(localStorage.getItem('backet_products')) || [],
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

        },
        // saveEditName(state, action){
        //     const{id, new_name, name} = action.payload
        //     console.log(id, name, new_name)

        //     const product = state.products.find(elem=> elem.id === id)
        //     if(name === 'name'){
        //         product.name = new_name
        //     }
        //     if(name === 'category'){
        //         product.category = new_name
        //     }
        //   },
        saveEditItem(state, action){
            const{id, data, key} = action.payload

            const product = state.products.find(elem=> elem.id === id)
            product[key] = data
            // console.log(id, data, key);
          }
    },
});


export const {addProduct, addToBacket,removeProduct, removeProductFromBacket, removeAllBasket, removeAllProducts, addOneCount, minusOneCount, saveEditItem } = productsSlice.actions;
export default productsSlice.reducer;



