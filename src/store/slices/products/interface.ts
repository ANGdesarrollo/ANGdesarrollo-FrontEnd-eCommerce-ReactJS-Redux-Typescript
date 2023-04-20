import { IProduct } from '../../../interfaces/interfaceProduct';

export interface IProductInitial {
    products: IProduct[];
    onLoading: boolean;
    onError: boolean;
}

export interface IActionProduct {
    payload: IProductInitial;
    type: string;
}
