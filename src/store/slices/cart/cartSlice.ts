import { createSlice } from '@reduxjs/toolkit';
import { ICartInitial, ICartPayload } from './interface';
import { IProductCart } from '../../../interfaces/interfaceProduct';

export const initialState: ICartInitial = {
    cart: [],
    amount: 0,
    onLoading: false,
    onError: false,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, action: ICartPayload) => {
            const { _id, price } = action.payload.product;
            const { qty } = action.payload;

            const dataLocal: IProductCart = {
                _id,
                qty,
                price,
            };
            const existsInLocal = localStorage.getItem('cart');

            if (!existsInLocal) {
                localStorage.setItem('cart', JSON.stringify([dataLocal]));
                state.cart.push(dataLocal);
            } else {
                const existsProductInCart = state.cart.find((el) => el._id === dataLocal._id);
                if (existsProductInCart) {
                    const qty = dataLocal.qty + existsProductInCart.qty;
                    const updatedData = { ...existsProductInCart, qty };
                    state.cart = state.cart.filter((el) => el._id !== dataLocal._id);
                    state.cart = [...state.cart, updatedData];
                } else {
                    state.cart.push(dataLocal);
                    localStorage.setItem('cart', JSON.stringify(state.cart));
                }
            }
        },
        calculateAmount: (state) => {
            let totalAmount = 0;
            state.cart.map((el) => {
                totalAmount += el.price;
            });
            state.amount = totalAmount;
        },
        getLocalStorageInfo: (state) => {
            const checkLocal = localStorage.getItem('cart');
            if (checkLocal) {
                state.cart = [...JSON.parse(checkLocal)];
            }
        },
        deleteProduct: (state, action) => {
            const data = (state.cart = state.cart.filter((el) => el._id !== action.payload));
            if (data.length > 0) {
                localStorage.setItem('cart', JSON.stringify(state.cart));
            } else {
                localStorage.removeItem('cart');
            }
        },
        sendOrder: (state) => {
            state.cart = [];
            localStorage.removeItem('cart');
        },
        onLoading: (state, action) => {
            state.onLoading = action.payload;
        },
        emptyCart: (state) => {
            state.cart = [];
            localStorage.removeItem('cart');
        },
    },
});

export const { addProduct, getLocalStorageInfo, deleteProduct, sendOrder, onLoading, emptyCart } = cartSlice.actions;
