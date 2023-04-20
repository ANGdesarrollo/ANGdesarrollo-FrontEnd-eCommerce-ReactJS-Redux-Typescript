import React, { useEffect, useState } from 'react';
import { HomeLayout } from './HomeLayout';
import { useImages } from '../../hooks/useImages';
import { useAppSelector } from '../../hooks/useRedux';
import { IProduct } from '../../interfaces/interfaceProduct';
import { useFilterProducts } from '../../hooks/useFilterProducts';
import { getPriceWithDiscount } from '../../hooks/useDiscount';

const { cylinder_0, triangle_0, cylinderTriangle, cubeCone_0 } = useImages();

export const HomeContainer = () => {
    const { products } = useAppSelector((state) => state.products);
    const [allProducts, setAllProducts] = useState<IProduct[]>([]);
    const [bestDiscounts, setBestDiscounts] = useState<IProduct[]>([]);
    const [betterSold, setBetterSold] = useState<IProduct[]>([]);
    const { productsWithDiscounts, productsBetterSold } = useFilterProducts();

    useEffect(() => {
        const discountProducts = productsWithDiscounts(products);
        const betterSoldProducts = productsBetterSold(products);
        products && setAllProducts(discountProducts);
        discountProducts.sort((a, b) => b.discount - a.discount);
        setBestDiscounts(discountProducts.slice(0, 3));
        setBetterSold(betterSoldProducts.slice(0, 2));
    }, [products]);

    return (
        <HomeLayout
            cylinder_0={cylinder_0}
            triangle_0={triangle_0}
            cylinderTriangle={cylinderTriangle}
            bestDiscounts={bestDiscounts}
            betterSold={betterSold}
            allProducts={allProducts}
            getPriceWithDiscount={getPriceWithDiscount}
            cubeCone_0={cubeCone_0}
        />
    );
};
