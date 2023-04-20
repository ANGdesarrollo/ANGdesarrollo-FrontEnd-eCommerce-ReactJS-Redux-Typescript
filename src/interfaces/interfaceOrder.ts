import { IProductCart } from './interfaceProduct';

export interface IOrder {
    username: string;
    cart: IProductCart[];
    amount: number;
}
