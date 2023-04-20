import React from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from '../../../router/routes';

interface props {
    handleSubMenu: () => void;
    closeMenu: () => void;
}

export const FirstNav = ({ handleSubMenu, closeMenu }: props) => {
    return (
        <>
            {routes.map(
                ({ to, name }) =>
                    name !== 'productsDetail' &&
                    name !== 'cart' &&
                    (name === 'products' ? (
                        <li key={to} id="item-products" onClick={handleSubMenu}>
                            {name.toUpperCase()}
                        </li>
                    ) : (
                        <li onClick={closeMenu} key={to}>
                            <NavLink to={`${to}`}>{name.toUpperCase()}</NavLink>
                        </li>
                    ))
            )}
        </>
    );
};
