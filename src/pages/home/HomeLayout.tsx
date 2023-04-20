import React from 'react';
import { CarouselBootstrap } from './components/Carousel';
import { IProduct } from '../../interfaces/interfaceProduct';
import { BestDiscounts } from './components/BestDiscounts';
import { BetterSold } from './components/BetterSold';
import { DynamicProduct } from './components/DynamicProduct';

interface props {
    cylinder_0: string;
    triangle_0: string;
    cylinderTriangle: string;
    cubeCone_0: string;
    bestDiscounts: IProduct[];
    betterSold: IProduct[];
    allProducts: IProduct[];
    getPriceWithDiscount: (price: number, discount: number) => number;
}

export const HomeLayout = ({
    cylinder_0,
    triangle_0,
    cylinderTriangle,
    cubeCone_0,
    bestDiscounts,
    betterSold,
    allProducts,
    getPriceWithDiscount,
}: props) => {
    return (
        <main>
            <section className="first">
                <div className="first__title">
                    <h1>
                        <span className="first-span">WE ARE THE LARGEST</span>
                        <span className="second-span">DISTRIBUTORS</span>
                        <span className="third-span">OF GAMER PRODUCTS</span>
                    </h1>
                </div>
                <div className="first__cards">
                    <BestDiscounts bestDiscounts={bestDiscounts} />
                </div>
                <div className="first__cylinder">
                    <img src={cylinder_0} alt="cylinder" />
                </div>
                <div className="first__carousel">
                    <CarouselBootstrap />
                </div>
            </section>
            <section className="second">
                <BetterSold betterSold={betterSold} triangle_0={triangle_0} />
            </section>
            <section className="third">
                <DynamicProduct
                    allProducts={allProducts}
                    getPriceWithDiscount={getPriceWithDiscount}
                    geometryImage={cylinderTriangle}
                    classNameProduct={'third__product'}
                    classNameDescription={'third__description'}
                />
            </section>
            <section className="fourth">
                <DynamicProduct
                    allProducts={[...allProducts].reverse()}
                    getPriceWithDiscount={getPriceWithDiscount}
                    geometryImage={cubeCone_0}
                    classNameProduct={'fourth__product'}
                    classNameDescription={'fourth__description'}
                />
            </section>
        </main>
    );
};
