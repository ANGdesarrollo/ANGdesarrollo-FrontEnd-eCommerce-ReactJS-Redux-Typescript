import React, { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { PublicRoutes } from './';
import { routes } from './routes';
import { useAppDispatch } from '../hooks/useRedux';
import { getProducts } from '../store/slices/products/thunk';
import { authSession } from '../store/slices/user/thunk';
import { getLocalStorageInfo } from '../store/slices/cart/cartSlice';
export const AppRouter = () => {
    const dispatch = useAppDispatch();
    dispatch(getProducts());
    dispatch(authSession());
    dispatch(getLocalStorageInfo());

    return (
        <Routes>
            <Route element={<PublicRoutes />}>
                {routes.map(({ path, Component }) => {
                    return <Route key={path} path={`${path}`} element={<Component />}></Route>;
                })}
            </Route>
        </Routes>
    );
};
