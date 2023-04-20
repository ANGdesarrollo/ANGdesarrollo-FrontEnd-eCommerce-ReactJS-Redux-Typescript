import { IProduct, IProductCart } from '../../../interfaces/interfaceProduct';

export interface ICartInitial {
    cart: IProductCart[];
    amount: number;
    onLoading: boolean;
    onError: boolean;
}

export interface ICartPayload {
    payload: {
        product: IProduct;
        qty: number;
    };
    type: string;
}
