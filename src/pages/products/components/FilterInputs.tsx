import React, { useState, useEffect } from 'react';

interface Props {
    selectedOption: string;
    handleOptionChange: (event: { target: { value: React.SetStateAction<string> } }) => void;
}

const radioOptions = [
    { id: 'lowerPrice', label: 'Lower price' },
    { id: 'higherPrice', label: 'Higher price' },
    { id: 'betterOffers', label: 'Better offers' },
    { id: 'betterSold', label: 'Better sold' },
];

export const FilterInputs = ({ selectedOption, handleOptionChange }: Props) => {

    return (
        <>
            <div>
                <h2>ORDER BY</h2>
            </div>
            {radioOptions.map((option) => (
                <div key={option.id}>
                    <label htmlFor={option.id}>{option.label}</label>
                    <input
                        id={option.id}
                        type="radio"
                        value={option.id}
                        checked={selectedOption === option.id}
                        onChange={handleOptionChange}
                    />
                </div>
            ))}
        </>
    );
};
