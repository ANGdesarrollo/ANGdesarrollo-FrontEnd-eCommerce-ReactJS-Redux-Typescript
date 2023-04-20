import React, { useEffect } from 'react';
import { NavbarLayout } from './NavbarLayout';
import { useState } from 'react';

export const NavbarContainer = () => {
    const [activateMenu, setActivateMenu] = useState({
        firstPage: false,
        secondPage: false,
    });

    useEffect(() => {
        if (activateMenu.firstPage || activateMenu.secondPage) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflowX = 'hidden';
            document.body.style.overflow = 'auto';
        }
    }, [activateMenu]);

    const handleMenu = (): void => {
        if (!activateMenu.firstPage && !activateMenu.secondPage) {
            setActivateMenu({
                ...activateMenu,
                firstPage: true,
            });
        } else {
            setActivateMenu({
                firstPage: false,
                secondPage: false,
            });
        }
    };

    const handleSubMenu = (): void => {
        if (activateMenu.firstPage) {
            setActivateMenu({
                firstPage: false,
                secondPage: true,
            });
        } else {
            setActivateMenu({
                firstPage: true,
                secondPage: false,
            });
        }
    };

    const conditionalClasses = (): string => {
        if (activateMenu.firstPage) return 'first-page';
        if (activateMenu.secondPage) return 'second-page';

        return '';
    };

    const closeMenu = (): void => {
        setActivateMenu({
            firstPage: false,
            secondPage: false,
        });
    };

    return (
        <NavbarLayout
            handleMenu={handleMenu}
            handleSubMenu={handleSubMenu}
            conditionalClasses={conditionalClasses}
            activateMenu={activateMenu}
            closeMenu={closeMenu}
        />
    );
};
