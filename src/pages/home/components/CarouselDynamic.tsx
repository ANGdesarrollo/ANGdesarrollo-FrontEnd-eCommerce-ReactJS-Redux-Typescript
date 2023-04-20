import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import { IProduct } from '../../../interfaces/interfaceProduct';
import { useNavigate } from 'react-router-dom';
interface Props {
    allProducts: IProduct[];
    getPriceWithDiscount: (price: number, discount: number) => number;
}
export const CarouselDynamic = ({ allProducts, getPriceWithDiscount }: Props) => {
    const navigate = useNavigate();
    return (
        <Carousel
            className="w-100 d-flex justify-content-center align-items-center"
            controls={false}
            indicators={false}
            interval={3000}>
            {allProducts.map((el, index) => {
                return (
                    <Carousel.Item key={el._id}>
                        <div>
                            <img src={allProducts[index].thumbnail.imgPath} alt="Product" />
                            <h2>{allProducts[index].name}</h2>
                            <button onClick={() => navigate(`/products/${el.category}/${el._id}`)}>
                                <span>${allProducts[index].price}</span>
                                <span>
                                    ${getPriceWithDiscount(allProducts[index].price, allProducts[index].discount)}
                                </span>
                            </button>
                        </div>
                    </Carousel.Item>
                );
            })}
        </Carousel>
    );
};
