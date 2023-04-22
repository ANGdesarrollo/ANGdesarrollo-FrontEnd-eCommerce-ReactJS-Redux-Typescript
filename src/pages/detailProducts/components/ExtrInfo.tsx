import React from 'react';
import { useImages } from '../../../hooks/useImages';
import { useNavigate } from 'react-router-dom';

const { creditCard, truck, exchange, store } = useImages();

interface Props {
    details: string;
}

export const ExtrInfo = ({ details }: Props) => {
    const navigate = useNavigate();
    return (
        <>
            <div className="description">
                <p>{details}</p>
            </div>
            <div className="options-container">
                <div className="options borderTop">
                    <div>
                        <div className="imageIcon">
                            <img onClick={() => navigate('returnPolicy')} src={creditCard} alt="credit" />
                        </div>
                        <p>
                            FEES & FORMS OF PAYMENT <span>view more &gt;</span>
                        </p>
                    </div>
                    <div>
                        <div className="imageIcon">
                            <img onClick={() => navigate('returnPolicy')} src={truck} alt="shipment" />
                        </div>
                        <p>
                            SHIPPING TIME & COST <span>view more &gt;</span>
                        </p>
                    </div>
                </div>
                <div className="options">
                    <div>
                        <div>
                            <div className="imageIcon">
                                <img onClick={() => navigate('returnPolicy')} src={exchange} alt="return-policy" />
                            </div>
                        </div>
                        <p>
                            CHANGES & RETURNS <span>view more &gt;</span>
                        </p>
                    </div>
                    <div>
                        <div className="imageIcon">
                            <img onClick={() => navigate('returnPolicy')} src={store} alt="store" />
                        </div>
                        <p>
                            WITHDRAWAL IN BRANCHES <span>view more &gt;</span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};
