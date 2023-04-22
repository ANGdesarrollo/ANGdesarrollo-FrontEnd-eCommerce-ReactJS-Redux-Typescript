import { AppDispatch } from '../../store';
import { onLoading } from './cartSlice';
import { axiosApi } from '../../../config/axios';
import { swalAlert } from '../../../config/swal';
import { sendOrder } from './cartSlice';
import { IOrder } from '../../../interfaces/interfaceOrder';

export const onSendOrder =
    (order: IOrder): any =>
    async (dispatch: AppDispatch) => {
        dispatch(onLoading(true));
        axiosApi
            .post('/order', {
                username: order.username,
                cart: order.cart,
                amount: order.amount,
            })
            .then(() => {
                dispatch(onLoading(false));
                dispatch(sendOrder());
                swalAlert({ message: 'Your order has been successfully sent' });
            })
            .catch(() => {
                swalAlert({ message: 'There was an error, please try again' });
                dispatch(onLoading(false));
            });
    };
