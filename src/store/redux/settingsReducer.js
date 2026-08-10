import { createSlice } from "@reduxjs/toolkit";
import categories from '../../data/categories.json'

const defaultColors = {
    productBG: 'red',
    priceColor: 'black',
    nameColor: 'black',
    categoryColor: 'black',
    discountColor: 'black',
    removeBG: 'blue',
    productBorder: 'black',
    btnText: 'black',

    nameFontSize: 10,
    priceFontSize: 10,
    categoryFontSize: 10,
    discountFontSize: 10,
    btnTextFontSize: 10
};

const colors = JSON.parse(localStorage.getItem('settings')) || defaultColors
const local_categories = JSON.parse(localStorage.getItem('categories')) || categories

const settingsSlice = createSlice({
    name: "settings",
    initialState: {
        productBG: colors.productBG,
        priceColor: colors.priceColor,
        nameColor: colors.nameColor,
        categoryColor: colors.categoryColor,
        discountColor: colors.discountColor,
        removeBG: colors.removeBG,
        productBorder: colors.productBorder,
        btnText: colors.btnText,

        nameFontSize: colors.nameFontSize,
        priceFontSize:colors.priceFontSize,
        categoryFontSize: colors.categoryFontSize,
        discountFontSize: colors.discountFontSize,
        btnTextFontSize: colors.btnTextFontSize,
        categories: local_categories
    },

    reducers: {
        changeColor(state, action) {
            const { title, color, font_size, bg } = action.payload

            switch (title) {
                case 'name': 
                state.nameColor = color; 
                state.nameFontSize = font_size;
                break;
                case 'price': 
                state.priceColor = color; 
                state.priceFontSize = font_size;
                break;
                case 'category': 
                state.categoryColor = color;
                state.categoryFontSize = font_size;
                break;
                case 'discount': 
                state.discountColor = color;
                state.discountFontSize = font_size;
                break;
                case 'btnText': 
                state.btnText = color;
                state.btnTextFontSize = font_size;
                break;
                case 'BG': state.productBG = bg; 
                break;
                case 'btn_BG': state.removeBG = bg; 
                break;

            }
        },
        deleteCategory(state,action){
            state.categories = state.categories.filter(category=> category != action.payload)
        },
        addNewCategory(state,action){
            state.categories.push(action.payload)
        }

    },
});


export const { changeColor, deleteCategory, addNewCategory} = settingsSlice.actions;
export default settingsSlice.reducer;