import React from 'react';
import { useImages } from '../../hooks/useImages';
import { FieldErrors, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form';
import { usePatterns } from '../../hooks/usePatterns';
import { IEmail } from '../../interfaces/interfaceEmail';
import { Orbit } from '@uiball/loaders';

const { facebookIcon, instagramIcon, gmailIcon, locationIcon } = useImages();

interface Props {
    handleSubmit: UseFormHandleSubmit<IEmail>;
    errors: FieldErrors<IEmail>;
    register: UseFormRegister<IEmail>;
    onSubmit: (data: any) => void;
    manageState: { onLoading: boolean; onError: boolean };
}

export const ContactLayout = ({ errors, register, handleSubmit, onSubmit, manageState }: Props) => {
    const { validateEmail } = usePatterns();
    return (
        <main className="main">
            <div className="form">
                <div className="form__icons">
                    <ul>
                        <li>
                            <a href="https://api.whatsapp.com/send?phone=542915343707" target="_blank" rel="noreferrer">
                                <img src={gmailIcon} alt="whatsApp" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                                <img src={facebookIcon} alt="Facebook" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                                <img src={instagramIcon} alt="Instagram" />
                            </a>
                        </li>
                        <li>
                            <a href="https://goo.gl/maps/LArbc5hoxP28NNdk9" target="_blank" rel="noreferrer">
                                <img src={locationIcon} alt="location" />
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="form__form-part">
                    <div className="points-form">
                        <span id="span-point-a"></span>
                        <span id="span-point-b"></span>
                        <span id="span-point-c"></span>
                    </div>
                    <div className="title-form">
                        <span>CONTACT</span>
                        <span id="subline-form">US</span>
                    </div>

                    <form action="" method="POST" className="inputs-form" onSubmit={handleSubmit(onSubmit)}>
                        <div className="container-form-group">
                            <div className="app-form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    {...register('name', {
                                        required: true,
                                    })}
                                    id="name"
                                    className="app-form-control"
                                    placeholder="Ej: Alexis Graff"
                                    name="name"
                                    required
                                />
                                {errors.name?.type === 'required' && <p>This field is required</p>}
                            </div>
                            <div className="app-form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    {...register('email', {
                                        required: true,
                                        pattern: validateEmail,
                                    })}
                                    id="email"
                                    className="app-form-control"
                                    placeholder="Ej: gameon@gmail.com"
                                    name="email"
                                    required></input>
                                {errors.email?.type === 'required' && <p>This field is required</p>}
                                {errors.email?.type === 'pattern' && <p>Invalid email</p>}
                            </div>
                            <div className="app-form-group">
                                <label htmlFor="contact">Phone Number</label>
                                <input
                                    {...register('phone', {
                                        required: true,
                                    })}
                                    id="phone"
                                    className="app-form-control"
                                    placeholder="Ej: +54 (291) 5343707"
                                    name="phone"></input>
                                {errors.phone?.type === 'required' && <p>This field is required</p>}
                            </div>
                            <div className="app-form-group message">
                                <label htmlFor="message">Message</label>
                                <input
                                    {...register('message', {
                                        required: true,
                                    })}
                                    id="message"
                                    className="app-form-control"
                                    placeholder="Write Here"
                                    name="message"></input>
                                {errors.message?.type === 'required' && <p>This field is required</p>}
                            </div>
                            <div className="buttons">
                                {!manageState.onLoading ? (
                                    <button id="js-send" type="submit" className="app-form-button">
                                        SEND
                                    </button>
                                ) : (
                                    <Orbit size={35} color="#231F20" />
                                )}
                                {manageState.onError && <p>There was an error, please try again</p>}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
};
