import React, { useState, useEffect } from 'react';
import { ProductsLayout } from './ProductsLayout';
import { useAppSelector } from '../../hooks/useRedux';
import { IProduct } from '../../interfaces/interfaceProduct';
import { useParams } from 'react-router-dom';
import { useFilterProducts } from '../../hooks/useFilterProducts';

export const ProductsContainer = () => {
    const [filterProducts, setFilterProducts] = useState<IProduct[]>([]);
    const [selectedOption, setSelectedOption] = useState('');
    const { products } = useAppSelector((state) => state.products);
    const { category } = useParams();

    const handleOptionChange = (event: { target: { value: React.SetStateAction<string> } }): void => {
        setSelectedOption(event.target.value);
    };

    const { lowerPrice, higherPrice, productsBetterDiscounts, productsBetterSold } = useFilterProducts();

    const filteringProducts = (filterProducts: IProduct[]): void => {
        if (selectedOption === 'lowerPrice') setFilterProducts(lowerPrice(filterProducts));
        if (selectedOption === 'higherPrice') setFilterProducts(higherPrice(filterProducts));
        if (selectedOption === 'betterOffers') setFilterProducts(productsBetterDiscounts(filterProducts));
        if (selectedOption === 'betterSold') setFilterProducts(productsBetterSold(filterProducts));
    };

    const searchProducts = (event: { target: { value: React.SetStateAction<string> } }): void => {
        const inputValue = String(event.target.value);
        const foundProducts = filterProducts.filter((el) => el.name.toLowerCase().includes(inputValue.toLowerCase()));
        setFilterProducts(foundProducts);
        if (inputValue.length === 0) setProducts();
    };

    const setProducts = () => {
        if (products) {
            if (category === 'allProducts') {
                setFilterProducts(products);
            } else {
                const filter = products.filter((el) => el.category.toLowerCase() === category);
                setFilterProducts(filter);
            }
        }
    };

    useEffect(() => {
        filteringProducts(filterProducts);
    }, [selectedOption]);

    useEffect(() => {
        setSelectedOption('betterOffers');
    }, [category]);

    useEffect(() => {
        setProducts();
    }, [category, products]);

    return (
        <ProductsLayout
            products={filterProducts}
            handleOptionChange={handleOptionChange}
            selectedOption={selectedOption}
            searchProducts={searchProducts}
        />
    );
};
