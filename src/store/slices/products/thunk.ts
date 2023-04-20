import { AppDispatch } from '../../store';
import { axiosApi } from '../../../config/axios';
import { getProductsSlice, onError, onLoading } from './productSlice';
import { IProduct } from '../../../interfaces/interfaceProduct';
import { swalAlert } from '../../../config/swal';

export const getProducts = (): any => async (dispatch: AppDispatch) => {
    dispatch(onLoading(true));
    axiosApi
        .get('/products')
        .then(({ data }) => {
            dispatch(onLoading(false));
            dispatch(onError(false));
            const products: IProduct[] = data.products;
            dispatch(getProductsSlice({ products }));
        })
        .catch((error) => {
            dispatch(onError(true));
            swalAlert({ message: `There was an error, please try again later` });
            throw new Error(`Error at getting products, ${error}`);
        });
};
