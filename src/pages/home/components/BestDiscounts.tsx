import React from 'react';
import { Card } from './Card';
import { IProduct } from '../../../interfaces/interfaceProduct';

interface props {
    bestDiscounts: IProduct[];
}

export const BestDiscounts = ({ bestDiscounts }: props) => {
    return (
        <>
            {bestDiscounts.map(({ thumbnail, name, _id, category }) => (
                <Card key={_id} _id={_id} image={thumbnail.imgPath} title={name} category={category} />
            ))}
        </>
    );
};
