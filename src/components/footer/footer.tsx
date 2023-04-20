import React from 'react';
import { useImages } from '../../hooks/useImages';

const {
    facebookIcon,
    instagramIcon,
    gmailIcon,
    locationIcon,
    mandoicon,
    triangle_1,
} = useImages();

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__title">
                <h2>EVERYTHING YOU ARE LOOKING FOR.</h2>
                <img src={mandoicon} alt="icon" />
            </div>
            <div className="footer__contact">
                <img src={facebookIcon} alt="facebook" />
                <img src={instagramIcon} alt="instagram" />
                <img src={gmailIcon} alt="gmail" />
                <img src={locationIcon} alt="location" />
            </div>
            <div>
                <img src="src/components/footer/footer" alt="" />
            </div>
            <div className="footer__geometry">
                <img src={triangle_1} alt="triangle" />
            </div>
        </footer>
    );
};
