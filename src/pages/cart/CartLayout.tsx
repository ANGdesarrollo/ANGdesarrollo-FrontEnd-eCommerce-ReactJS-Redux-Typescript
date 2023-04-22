import React from 'react';
import { IProduct } from '../../interfaces/interfaceProduct';
import {useAppDispatch, useAppSelector} from '../../hooks/useRedux';
import { deleteProduct, emptyCart } from '../../store/slices/cart/cartSlice';
import { getPriceWithDiscount } from '../../hooks/useDiscount';

interface Props {
    dataCart: IProduct[];
    subTotalToPay: () => number;
    confirmOrder: () => void;
}

export const CartLayout = ({ dataCart, subTotalToPay, confirmOrder }: Props) => {
    const dispatch = useAppDispatch();
    const { onLoading } = useAppSelector(state => state.cart);
    return (
        <main>
            <div className="cart-product-container">
                {dataCart.map((el) => {
                    return (
                        <div key={el._id} className="cart-product">
                            <div className="cart-product__img" key={el._id}>
                                <img src={el.thumbnail.imgPath} alt="product bought" />
                            </div>
                            <div className="cart-product__name">
                                <h2>{el.name}</h2>
                            </div>
                            <div className="cart-product__price">
                                <h2>PRICE: ${getPriceWithDiscount(el.price, el.discount)}</h2>
                            </div>
                            <div className="cart-product__qty">
                                <h2>QTY: {el.qty}</h2>
                            </div>
                            <div className="cart-product__total">
                                {el.qty && el.discount === 0 ? (
                                    <h2>{`TOTAL: $${el.price * el.qty}`}</h2>
                                ) : (
                                    el.qty && (
                                        <h2>{`TOTAL: $${getPriceWithDiscount(el.price, el.discount) * el.qty}`}</h2>
                                    )
                                )}
                            </div>
                            <div className="cart-product__stock">
                                <h2>{`STOCK: ${el.stock}`}</h2>
                            </div>
                            <div className="cart-product__delete">
                                <img
                                    onClick={() => {
                                        dispatch(deleteProduct(el._id));
                                    }}
                                    src="https://res.cloudinary.com/dwz16rstr/image/upload/v1662958505/react-js-game-on/icons/delete_h4swr7.png"
                                    alt=""
                                />
                            </div>
                        </div>
                    );
                })}
                <div className="total-to-pay">
                    <div className="total-to-pay__subtotal">
                        <div>
                            <div className="subtotal">
                                <h2 className="h2-subtotal-final">SUBTOTAL:</h2>
                                <span>USD ${subTotalToPay()}</span>
                            </div>
                            <div className="task-final">
                                <h2>TAX 21%: ${(subTotalToPay() * 0.21).toFixed(2)}</h2>
                            </div>
                        </div>
                    </div>
                    <div className="total-to-pay__total-to-pay">
                        <h2>
                            <span className="span-toPay">TOTAL: </span>USD${' '}
                            {(subTotalToPay() + subTotalToPay() * 0.21).toFixed(2)}
                        </h2>
                        <div className="buttons-itemCart">
                            <button onClick={confirmOrder} className="css-button-shadow-border-sliding--rose">
                                <p>SEND ORDER</p>
                            </button>
                            <div>
                                <button
                                    disabled={onLoading}
                                    onClick={() => dispatch(emptyCart())}
                                    className="css-button-shadow-border-sliding--rose">
                                    EMPTY CART
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};
