import { FieldErrors, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form';
import { FormValues } from './LoginRegisterContainer';

export interface Props {
    multiplesGeometrys: string;
    exit: string;
    title: string;
    button: string;
    paragraphText: string;
    spanLoginRegister: string;
    dispatch: any;
    changeView: any;
    pageRegister: boolean;
    handleSubmit: UseFormHandleSubmit<FormValues>;
    errors: FieldErrors<FormValues>;
    register: UseFormRegister<FormValues>;
    onSubmit: (data: any) => void;
    validateEqualPassword: boolean;
}
