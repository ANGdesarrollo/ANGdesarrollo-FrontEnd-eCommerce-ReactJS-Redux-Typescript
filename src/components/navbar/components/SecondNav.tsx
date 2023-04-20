import React from 'react';
import { NavLink } from 'react-router-dom';
import { secondNav } from '../data/data';

interface props {
    handleSubMenu: () => void;
    closeMenu: () => void;
}

export const SecondNav = ({ handleSubMenu, closeMenu }: props) => {
    return (
        <>
            {secondNav.map(({ href, name }, i) =>
                name === 'RETURN' ? (
                    <li
                        key={i}
                        onClick={handleSubMenu} id="return">
                        {name}
                    </li>
                ) : (
                    <li key={i}>
                        <NavLink onClick={() => closeMenu()} to={`${href}`}>{name}</NavLink>
                    </li>
                )
            )}
        </>
    );
};
