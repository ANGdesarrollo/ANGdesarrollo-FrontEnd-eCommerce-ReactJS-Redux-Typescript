import { IProduct } from '../interfaces/interfaceProduct';

export const useFilterProducts = () => {
    const productsWithDiscounts = (products: IProduct[]): IProduct[] => {
        return products.filter((el) => el.discount !== 0);
    };

    const productsBetterDiscounts = (products: IProduct[]): IProduct[] => {
        return [...products].sort((a, b) => b.discount - a.discount);
    };

    const productsBetterSold = (products: IProduct[]): IProduct[] => {
        return [...products].sort((a, b) => b.soldQty - a.soldQty);
    };

    const higherPrice = (products: IProduct[]): IProduct[] => {
        return [...products].sort((a, b) => b.price - a.price);
    };

    const lowerPrice = (products: IProduct[]): IProduct[] => {
        return [...products].sort((b, a) => b.price - a.price);
    };

    return {
        productsWithDiscounts,
        productsBetterSold,
        higherPrice,
        lowerPrice,
        productsBetterDiscounts,
    };
};
