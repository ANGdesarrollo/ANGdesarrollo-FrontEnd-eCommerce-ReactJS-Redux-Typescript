import { configureStore } from '@reduxjs/toolkit';
import { productsSlice } from './slices/products/productSlice';
import { userSlice } from './slices/user/userSlice';
import { cartSlice } from './slices/cart/cartSlice';

export const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        products: productsSlice.reducer,
        user: userSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
