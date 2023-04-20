import { AppDispatch } from '../../store';
import { axiosApi } from '../../../config/axios';
import {
    closeView,
    loginView,
    onAuthSession,
    onError,
    onLoading,
    onLoginSlice,
    onLogOutSlice,
    onRegisterSlice,
} from './userSlice';
import { IUserDTO } from '../../../interfaces/interfaceUser';
import { swalAlert } from '../../../config/swal';

export const onLogin =
    (username: string, password: string): any =>
    async (dispatch: AppDispatch) => {
        dispatch(onLoading(true));
        axiosApi
            .post('/user/login', {
                username,
                password,
            })
            .then(({ data }) => {
                dispatch(onError(false));
                dispatch(onLoading(false));
                dispatch(onLoginSlice({ isLogged: data.status, username: username, isAdmin: data.isAdmin }));
                dispatch(closeView());
                swalAlert({ message: `Welcome ${username.split('@')[0]}` });
            })
            .catch((error) => {
                dispatch(onError(true));
                dispatch(onLoading(false));
                throw new Error(`Error at log in, ${error}`);
            });
    };

export const onRegister = (user: IUserDTO) => async (dispatch: AppDispatch) => {
    dispatch(onLoading(true));
    axiosApi
        .post('/user/register', {
            username: user.username,
            password: user.password,
        })
        .then(() => {
            dispatch(onError(false));
            dispatch(onLoading(false));
            dispatch(onRegisterSlice(true));
            dispatch(loginView());
            swalAlert({ message: 'Successfully Registered' });
        })
        .catch(() => {
            dispatch(onError(true));
            dispatch(onLoading(false));
        });
};

export const onLogout = (): any => async (dispatch: AppDispatch) => {
    dispatch(onLoading(true));
    axiosApi
        .delete('/user/logout')
        .then(() => {
            dispatch(onLoading(false));
            dispatch(onLogOutSlice(false));
        })
        .catch(() => {
            swalAlert({ message: 'Logout error' });
            dispatch(onLoading(false));
            dispatch(onLogOutSlice(true));
        });
};

export const authSession = (): any => async (dispatch: AppDispatch) => {
    dispatch(onLoading(true));
    axiosApi
        .get('/user/authSession')
        .then(({ data }) => {
            if (!data.status) {
                dispatch(
                    onAuthSession({
                        username: null,
                        isLogged: false,
                    })
                );
            } else {
                dispatch(
                    onAuthSession({
                        username: data.username,
                        isLogged: true,
                    })
                );
                swalAlert({ message: `Welcome ${data.username.split('@')[0]}` });
            }
            dispatch(onLoading(false));
        })
        .catch(() => {
            dispatch(onLoading(false));
            dispatch(
                onAuthSession({
                    checkSessionAuth: true,
                    username: null,
                    isLogged: false,
                })
            );
        });
};
