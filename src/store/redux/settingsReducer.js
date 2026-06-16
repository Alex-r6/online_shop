import { createSlice } from "@reduxjs/toolkit";

const defaultColors = {
    productBG: 'red',
    priceColor: 'black',
    nameColor: 'black',
    categoryColor: 'black',
    removeBG: 'blue',
    productBorder: 'black',

    nameFontSize: 10,
    priceFontSize: 10,
    categoryFontSize: 10
};

const colors = JSON.parse(localStorage.getItem('settings') || 'null') || defaultColors;

const settingsSlice = createSlice({
    name: "settings",
    initialState: {
        productBG: colors.productBG,
        priceColor: colors.priceColor,
        nameColor: colors.nameColor,
        categoryColor: colors.categoryColor,
        removeBG: colors.removeBG,
        productBorder: colors.productBorder,

        nameFontSize: colors.nameFontSize,
        priceFontSize:colors.priceFontSize,
        categoryFontSize: colors.categoryFontSize

    },
    reducers: {
        changeColor(state, action) {
            const { title, color, font_size } = action.payload

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
                case 'BG': state.productBG = color; break;
                case 'btn_BG': state.removeBG = color; break;

            }
        }

    },
});


export const { changeColor } = settingsSlice.actions;
export default settingsSlice.reducer;