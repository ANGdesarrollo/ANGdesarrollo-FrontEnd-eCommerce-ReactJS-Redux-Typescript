import React from 'react';
import { useImages } from '../../hooks/useImages';
import { IProduct } from '../../interfaces/interfaceProduct';
import { CarouselOffers, FilterInputs, Card } from './components';

const { searchIcon } = useImages();

interface Props {
    products: IProduct[];
    handleOptionChange: (event: { target: { value: React.SetStateAction<string> } }) => void;
    selectedOption: string;
    searchProducts: (event: { target: { value: React.SetStateAction<string> } }) => void;
}

export const ProductsLayout = ({ products, handleOptionChange, selectedOption, searchProducts }: Props) => {
    return (
        <main>
            <CarouselOffers />
            <section className="first-products">
                <div className="first-products__search">
                    <div className="input-search">
                        <label htmlFor="search"></label>
                        <input onChange={searchProducts} id="search" type="text" />
                        <img src={searchIcon} alt="Search" />
                    </div>
                </div>
                <form className="first-products__filter">
                    <FilterInputs selectedOption={selectedOption} handleOptionChange={handleOptionChange} />
                </form>
            </section>
            <section className="second-products">
                <Card products={products} />
            </section>
        </main>
    );
};
