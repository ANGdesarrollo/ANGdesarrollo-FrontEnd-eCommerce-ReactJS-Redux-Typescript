import React, { useState } from 'react';
import { ContactLayout } from './ContactLayout';
import { useForm } from 'react-hook-form';
import { IEmail } from '../../interfaces/interfaceEmail';
import { axiosApi } from '../../config/axios';
import { swalAlert } from '../../config/swal';

export const ContactContainer = () => {
    const [manageState, setManageState] = useState({
        onLoading: false,
        onError: false,
    });
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<IEmail>();

    const onSubmit = (data: IEmail): void => {
        setManageState({
            ...manageState,
            onLoading: true,
        });
        axiosApi
            .post('/contact', {
                data,
            })
            .then(() => {
                setManageState({
                    onError: false,
                    onLoading: false,
                });
                reset();
                swalAlert({ message: 'Your message has benn sent !' });
            })
            .catch(() => {
                setManageState({
                    onLoading: false,
                    onError: true,
                });
            });
    };
    return (
        <ContactLayout
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            onSubmit={onSubmit}
            manageState={manageState}
        />
    );
};
