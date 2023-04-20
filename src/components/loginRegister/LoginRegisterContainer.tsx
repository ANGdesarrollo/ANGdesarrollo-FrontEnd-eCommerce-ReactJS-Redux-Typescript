import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { useImages } from '../../hooks/useImages';
import { loginView, registerView } from '../../store/slices/user/userSlice';
import { LoginRegisterLayout } from './LoginRegisterLayout';
import { useForm } from 'react-hook-form';
import { onLogin, onRegister } from '../../store/slices/user/thunk';
import { IUserDTO } from '../../interfaces/interfaceUser';

export interface FormValues {
    username: string;
    password: string;
    repeatPassword?: string;
}
const { exit, multiplesGeometrys } = useImages();

export const LoginRegisterContainer = () => {
    const [validateEqualPassword, setValidateEqualPassword] = useState<boolean>(false);
    const { pageLogin, pageRegister } = useAppSelector((state) => state.user);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>();
    const dispatch = useAppDispatch();

    const onSubmit = (data: IUserDTO): void => {
        if (pageLogin) {
            dispatch(onLogin(data.username, data.password));
        } else {
            if (data.password !== data.repeatPassword) {
                setValidateEqualPassword(true);
            } else {
                dispatch(onRegister(data));
            }
        }
    };

    const title = pageLogin ? 'SIGN IN' : 'SIGN UP';
    const changeView = pageLogin ? registerView() : loginView();
    const button = pageLogin ? 'LOGIN' : 'REGISTER';
    const paragraphText = pageLogin ? `Don't you have an account?` : `You already have an account?`;
    const spanLoginRegister = pageLogin ? 'Sign up here' : 'Sign in here';
    return pageLogin || pageRegister ? (
        <LoginRegisterLayout
            multiplesGeometrys={multiplesGeometrys}
            exit={exit}
            title={title}
            button={button}
            paragraphText={paragraphText}
            spanLoginRegister={spanLoginRegister}
            dispatch={dispatch}
            changeView={changeView}
            pageRegister={pageRegister}
            handleSubmit={handleSubmit}
            register={register}
            errors={errors}
            onSubmit={onSubmit}
            validateEqualPassword={validateEqualPassword}
        />
    ) : (
        <></>
    );
};
