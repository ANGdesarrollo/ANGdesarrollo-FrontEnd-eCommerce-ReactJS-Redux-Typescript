import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useImages } from '../../../hooks/useImages';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const { firstSlideOffers, secondSlideOffers } = useImages();

export const CarouselOffers = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img src={firstSlideOffers} className="d-block w-100" alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
                <img src={secondSlideOffers} className="d-block w-100" alt="Second slide" />
            </Carousel.Item>
        </Carousel>
    );
};
