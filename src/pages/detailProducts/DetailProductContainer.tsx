import React, { useState, useEffect } from 'react';
import { DetailProductLayout } from './DetailProductLayout';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { useNavigate, useParams } from 'react-router-dom';
import { IProduct } from '../../interfaces/interfaceProduct';
import { addProduct } from '../../store/slices/cart/cartSlice';
import { swalAlert } from '../../config/swal';

export const DetailProductContainer = () => {
    const [qty, setQty] = useState(1);
    const { products, onLoading } = useAppSelector((state) => state.products);
    const { username, isLogged } = useAppSelector((state) => state.user);

    const [productDetail, setProductDetail] = useState<IProduct>();
    const { category, id } = useParams();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (category && id && products) {
            const detail = products.find((el) => el._id === id);
            if (detail) {
                setProductDetail(detail);
            }
        }
    }, [category, id, products]);

    const handleAddQty = () => {
        if (productDetail) {
            if (qty < productDetail?.stock) {
                setQty(qty + 1);
            }
        }
    };

    const handleMinusQty = () => {
        if (productDetail) {
            if (qty !== 1) {
                setQty(qty - 1);
            }
        }
    };

    const addProductToCart = (product: IProduct): void => {
        if (isLogged && username) {
            dispatch(addProduct({ product, qty }));
            navigate('/cart');
        } else {
            swalAlert({ message: 'You must Login to buy products' });
        }
    };

    return onLoading && !productDetail ? (
        <main>Loading...</main>
    ) : (
        <DetailProductLayout
            productDetail={productDetail}
            handleAddQty={handleAddQty}
            handleMinusQty={handleMinusQty}
            qty={qty}
            addProductToCart={addProductToCart}
        />
    );
};
