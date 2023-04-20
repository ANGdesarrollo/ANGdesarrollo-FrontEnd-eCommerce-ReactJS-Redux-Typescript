import React, { useEffect } from 'react';
import { NavbarContainer } from './components/navbar/NavbarContainer';
import { AppRouter } from './router/AppRouter';
import { CustomerSupportContainer } from './components/customerSupport/CustomerSupportContainer';
import { Footer } from './components/footer/footer';
import { LoginRegisterContainer } from './components/loginRegister/LoginRegisterContainer';

export const App = () => {
    return (
        <>
            <NavbarContainer />
            <AppRouter />
            <CustomerSupportContainer />
            <LoginRegisterContainer />
            <Footer />
        </>
    );
};
