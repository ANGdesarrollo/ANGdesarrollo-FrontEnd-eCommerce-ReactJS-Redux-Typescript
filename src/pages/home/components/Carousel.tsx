import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import first from '../../../assets/videos-carousel/corsair.mp4';
import second from '../../../assets/videos-carousel/razer.mp4';
import third from '../../../assets/videos-carousel/steelseries.mp4';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export const CarouselBootstrap = () => {
    return (
        <Carousel>
            <Carousel.Item interval={63000}>
                <video autoPlay controls muted loop={true} src={first} className="d-block w-100 video"></video>
            </Carousel.Item>
            <Carousel.Item interval={25000}>
                <video autoPlay controls muted loop={true} src={second} className="d-block w-100 video"></video>
            </Carousel.Item>
            <Carousel.Item interval={72000}>
                <video autoPlay controls muted loop={true} src={third} className="d-block w-100 video"></video>
            </Carousel.Item>
        </Carousel>
    );
};
