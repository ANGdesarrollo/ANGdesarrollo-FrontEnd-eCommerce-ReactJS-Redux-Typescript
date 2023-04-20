import React from 'react';
import { IProduct } from '../../interfaces/interfaceProduct';
import { useImages } from '../../hooks/useImages';
import { getPriceWithDiscount } from '../../hooks/useDiscount';
import { ExtrInfo } from './components/ExtrInfo';

interface Props {
    productDetail: IProduct | undefined;
    handleAddQty: () => void;
    handleMinusQty: () => void;
    qty: number;
    addProductToCart: (product: IProduct) => void;
}

const { add, minus, cartCard } = useImages();

export const DetailProductLayout = ({ productDetail, qty, handleMinusQty, handleAddQty, addProductToCart }: Props) => {
    if (productDetail) {
        const {
            details,
            thumbnail: { backgroundPath },
            price,
            discount,
            name,
        } = productDetail;

        return (
            <main>
                <div className="container-detailsProduct">
                    <section className="left-detail">
                        <div className="left-detail__image">
                            <img src={backgroundPath} alt={name} />
                        </div>
                        <div className="left-detail__details">
                            <div className="left-box">
                                <div className="color">
                                    <p>Color</p>
                                    <span className="black-circle"></span>
                                    <span></span>
                                </div>
                                <div className="add-product">
                                    <img onClick={handleMinusQty} src={minus} alt="minus" />
                                    <span>{qty}</span>
                                    <img onClick={handleAddQty} src={add} alt="add" />
                                </div>
                            </div>
                            <div className="right-box">
                                <div className="title">PRICE</div>
                                <div className="price_cart">
                                    <div className="price">
                                        {discount !== 0 ? (
                                            <>
                                                <span>${price * qty}</span>
                                                <span>${getPriceWithDiscount(price, discount) * qty}</span>
                                            </>
                                        ) : (
                                            <>
                                                <span></span>
                                                <span>${price * qty}</span>
                                            </>
                                        )}
                                    </div>
                                    <div className="buy">
                                        <img onClick={() => addProductToCart(productDetail)} src={cartCard} alt="BUY" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="right-detail">
                        <ExtrInfo details={details} />
                    </section>
                </div>
            </main>
        );
    } else return <></>;
};
