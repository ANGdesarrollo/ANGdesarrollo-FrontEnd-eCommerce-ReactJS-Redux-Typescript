import React from 'react';
import { IProduct } from '../../../interfaces/interfaceProduct';
import { useImages } from '../../../hooks/useImages';
import { getPriceWithDiscount } from '../../../hooks/useDiscount';
import { useNavigate } from 'react-router-dom';

interface Props {
    products: IProduct[];
}

const { cartCard } = useImages();

export const Card = ({ products }: Props) => {
    const navigate = useNavigate();
    return (
        <>
            {products.map((el) => {
                return (
                    <div className="card" key={el._id}>
                        <div className="card__image">
                            <img src={el.thumbnail.imgPath} alt={el.name} />
                        </div>
                        <div className="card__title">
                            <div>
                                <h2>{el.category.toUpperCase()}</h2>
                                <h3>
                                    {el.name}
                                    <span></span>
                                </h3>
                                <p onClick={() => navigate(`/products/${el.category.toLowerCase()}/${el._id}`)}>
                                    Detail
                                </p>
                                <img src={cartCard} alt="cart" />
                            </div>
                        </div>
                        <div className="card__price">
                            <div>
                                {el.discount !== 0 ? (
                                    <p>
                                        <span>${el.price}</span>
                                        <span>${getPriceWithDiscount(el.price, el.discount)}</span>
                                    </p>
                                ) : (
                                    <p>
                                        <span></span>
                                        <span>${el.price}</span>
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
};
