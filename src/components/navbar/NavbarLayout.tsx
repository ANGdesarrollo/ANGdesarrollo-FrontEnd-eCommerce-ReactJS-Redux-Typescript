import React, { useEffect } from 'react';
import { FirstNav } from './components/FirstNav';
import { SecondNav } from './components/SecondNav';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { loginView } from '../../store/slices/user/userSlice';
import { useImages } from '../../hooks/useImages';
import { onLogout } from '../../store/slices/user/thunk';
import { Ring } from '@uiball/loaders';
import { useNavigate } from 'react-router-dom';

interface props {
    handleMenu: () => void;
    handleSubMenu: () => void;
    conditionalClasses: () => string;
    activateMenu: { firstPage: boolean; secondPage: boolean };
    closeMenu: () => void;
}

const { menuIcon, userIcon, cartIcon, logout } = useImages();

export const NavbarLayout = ({ handleMenu, handleSubMenu, conditionalClasses, activateMenu, closeMenu }: props) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { isLogged, loading } = useAppSelector((state) => state.user);
    const { firstPage, secondPage } = activateMenu;

    return (
        <header className="header">
            <div className="header__logo">
                <img src="src/components/navbar/NavbarLayout" alt="Logo" />
            </div>
            <nav className="header__first-nav">
                <ul className={`${firstPage} && ${conditionalClasses()}`}>
                    <FirstNav handleSubMenu={handleSubMenu} closeMenu={closeMenu} />
                </ul>
            </nav>
            <div className="header__access">
                <div>
                    {!loading ? (
                        !isLogged ? (
                            <img onClick={() => dispatch(loginView())} src={userIcon} alt="register" />
                        ) : (
                            <img onClick={() => dispatch(onLogout())} src={logout} alt="logout" />
                        )
                    ) : (
                        <Ring size={35} color={'white'} />
                    )}
                </div>
                <div>
                    <img onClick={() => navigate('/cart')} src={cartIcon} alt="cart" />
                </div>
            </div>
            <nav className="header__second-nav">
                <ul className={`${secondPage} && ${conditionalClasses()}`}>
                    <SecondNav handleSubMenu={handleSubMenu} closeMenu={closeMenu} />
                </ul>
            </nav>
            <div onClick={handleMenu} className="header__menu">
                <img src={menuIcon} alt="Menu" />
            </div>
        </header>
    );
};
