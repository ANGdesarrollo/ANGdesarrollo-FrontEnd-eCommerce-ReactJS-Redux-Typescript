import React, { useState, useEffect } from 'react';
import { IProduct } from '../../../interfaces/interfaceProduct';
import { useNavigate } from 'react-router-dom';
import { useImages } from '../../../hooks/useImages';

interface props {
    betterSold: IProduct[];
    triangle_0: string;
}

const { mandoicon } = useImages();

export const BetterSold = ({ betterSold, triangle_0 }: props) => {
    const navigate = useNavigate();
    return (
        <>
            <div className="second__title">
                <h2>
                    FEATURED PRODUCTS <img src={mandoicon} alt="icon" />
                </h2>
            </div>
            <div className="second__products">
                {betterSold.map((el) => (
                    <div key={el._id}>
                        <img src={el.thumbnail.imgPath} alt={el.name} />
                    </div>
                ))}
            </div>
            <div className="second__background">
                <img className="second_background" src={triangle_0} alt="background" />
            </div>
            <div className="second__button">
                <button onClick={() => navigate('/products/allProducts')}>Go</button>
            </div>
        </>
    );
};
