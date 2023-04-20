import { createSlice } from '@reduxjs/toolkit';
import { IActionProduct, IProductInitial } from './interface';

export const initialState: IProductInitial = {
    products: [],
    onLoading: false,
    onError: false,
};

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        getProductsSlice: (state: IProductInitial, action) => {
            state.products = action.payload.products;
        },
        onLoading: (state, action) => {
            state.onLoading = action.payload;
        },
        onError: (state, action) => {
            state.onLoading = action.payload;
        },
    },
});

export const { getProductsSlice, onLoading, onError } = productsSlice.actions;
