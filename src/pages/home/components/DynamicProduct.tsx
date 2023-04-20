import { IProduct } from '../../../interfaces/interfaceProduct';
import React from 'react';
import { CarouselDynamic } from './CarouselDynamic';

interface Props {
    allProducts: IProduct[];
    getPriceWithDiscount: (price: number, discount: number) => number;
    geometryImage: string;
    classNameProduct: string;
    classNameDescription: string;
}

export const DynamicProduct = ({
    allProducts,
    getPriceWithDiscount,
    geometryImage,
    classNameProduct,
    classNameDescription,
}: Props) => {
    return allProducts ? (
        <>
            <div className={classNameProduct}>
                <CarouselDynamic
                    allProducts={allProducts}
                    getPriceWithDiscount={getPriceWithDiscount}
                />
            </div>
            <div className={classNameDescription}>
                <div className="geometry-image">
                    <img src={geometryImage} alt="background" />
                </div>
                <div>Aca texto talvez</div>
            </div>
        </>
    ) : (
        <div></div>
    );
};
