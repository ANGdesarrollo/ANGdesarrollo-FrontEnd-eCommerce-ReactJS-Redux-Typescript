import React from 'react';
import { usePatterns } from '../../hooks/usePatterns';
import { useAppSelector } from '../../hooks/useRedux';
import { Orbit } from '@uiball/loaders';
import { closeView } from '../../store/slices/user/userSlice';
import { Props } from './interfaceProps';

export const LoginRegisterLayout = ({
    spanLoginRegister,
    changeView,
    dispatch,
    button,
    paragraphText,
    multiplesGeometrys,
    exit,
    title,
    pageRegister,
    handleSubmit,
    errors,
    register,
    onSubmit,
    validateEqualPassword,
}: Props) => {
    const { validateEmail } = usePatterns();
    const { loading, error } = useAppSelector((state) => state.user);
    return (
        <div className="container-auth">
            <div className="sub-container">
                <div className="background">
                    <img src={multiplesGeometrys} alt="background" />
                </div>
                <div className="close">
                    <img onClick={() => dispatch(closeView())} src={exit} alt="close" />
                </div>
                <div className="title">
                    <h2>{title}</h2>
                </div>
                <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor="username"></label>
                        <input
                            {...register('username', {
                                required: true,
                                pattern: validateEmail,
                            })}
                            autoComplete="off"
                            type="email"
                            placeholder="Email"
                        />
                        {errors.username?.type === 'required' && <p>This field is required</p>}
                        {errors.username?.type === 'pattern' && <p>Invalid email</p>}
                        {error && <p>Invalid data</p>}

                        <span className="border-input"></span>
                    </div>
                    <div>
                        <input
                            {...register('password', {
                                required: true,
                                minLength: 3,
                            })}
                            name="password"
                            autoComplete="off"
                            type="password"
                            placeholder="Password"
                            required={true}
                        />
                        {errors.password?.type === 'required' && <p>This field is required</p>}
                        {errors.password?.type === 'minLength' && <p>Password is too short!</p>}
                        {validateEqualPassword && <p>Passwords must match</p>}
                        <span className="border-input"></span>
                    </div>
                    {pageRegister && (
                        <div>
                            <input
                                {...register('repeatPassword', {
                                    required: true,
                                    minLength: 3,
                                })}
                                type="password"
                                name="repeatPassword"
                                placeholder="Repeat Password"
                                required={true}
                            />
                            {errors.password?.type === 'required' && <p>This field is required</p>}
                            {errors.password?.type === 'minLength' && <p>Password is too short!</p>}
                            <span className="border-input"></span>
                        </div>
                    )}
                    <div>
                        {!loading ? (
                            <>
                                <button type="submit">{button}</button>

                                <p>
                                    {paragraphText}
                                    <span onClick={() => dispatch(changeView)} className="change-view">
                                        {spanLoginRegister}
                                    </span>
                                </p>
                            </>
                        ) : (
                            <Orbit size={35} color="#231F20" />
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};
