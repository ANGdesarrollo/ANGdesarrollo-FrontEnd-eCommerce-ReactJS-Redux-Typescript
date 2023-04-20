import React from 'react';
import { useNavigate } from 'react-router-dom';

interface props {
    image: string;
    title: string;
    _id: string;
    category: string;
}

export const Card = ({ image, title, _id, category }: props) => {
    const navigate = useNavigate();
    return (
        <div
            onClick={() => {
                console.log('me clikearon');
                navigate(`/products/${category}/${_id}`);
            }}
            className="container-card">
            <div className="container-card__image">
                <img src={image} alt={`${title} image`} />
            </div>
            <div className="container-card__title">
                <h2>{title}</h2>
            </div>
        </div>
    );
};
