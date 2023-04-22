import React, { useEffect, useState } from 'react';
import { CartLayout } from './CartLayout';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { IProduct } from '../../interfaces/interfaceProduct';
import { getPriceWithDiscount } from '../../hooks/useDiscount';
import { useNavigate } from 'react-router-dom';
import { swalAlert } from '../../config/swal';
import { IOrder } from '../../interfaces/interfaceOrder';
import { onSendOrder } from '../../store/slices/cart/thunk';
import { EmptyCart } from './components/EmptyCart';

export const CartContainer = () => {
    const [dataCart, setDataCart] = useState<IProduct[]>([]);
    const { cart } = useAppSelector((state) => state.cart);
    const { products } = useAppSelector((state) => state.products);
    const { username, isLogged } = useAppSelector((state) => state.user);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!username && !isLogged) {
            swalAlert({ message: 'You must Login to see cart' });
            navigate('/');
        }
    }, []);

    useEffect(() => {
        const dataToShow: IProduct[] = [];
        if (products && cart.length > 0) {
            products.map((el) => {
                cart.map((itemCart) => {
                    if (el._id === itemCart._id) {
                        const dataToPush: IProduct = { ...itemCart, ...el };
                        dataToShow.push(dataToPush);
                    }
                });
            });
        }
        setDataCart(dataToShow);
    }, [cart, products]);

    const subTotalToPay = (): number => {
        let subTotal = 0;
        dataCart.map((el) => {
            if (el.discount === 0 && el.qty) subTotal += el.price * el.qty;
            if (el.discount !== 0 && el.qty) subTotal += getPriceWithDiscount(el.price, el.discount) * el.qty;
        });
        return subTotal;
    };

    const totalToPay = (): number => {
        return subTotalToPay() * 1.21;
    };

    const confirmOrder = (): void => {
        if (username) {
            const order: IOrder = {
                username,
                amount: totalToPay(),
                cart,
            };
            dispatch(onSendOrder(order));
        }
    };

    return cart.length < 1 ? (
        <EmptyCart />
    ) : (
        <CartLayout dataCart={dataCart} subTotalToPay={subTotalToPay} confirmOrder={confirmOrder} />
    );
};
