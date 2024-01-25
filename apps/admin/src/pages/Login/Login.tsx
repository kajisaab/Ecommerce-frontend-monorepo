import React, { useState } from 'react';
import {
    LoginPropsInterface,
    UserFormInterface,
    userFormErrorHandlerInterface,
} from './Login.interface';
import styles from './Login.module.css';
import { GoEye } from 'react-icons/go';
import { FaRegEyeSlash } from 'react-icons/fa';
import { Button } from '@repo/ui/button';
import './Login.css';

const Login: React.FC<LoginPropsInterface> = () => {
    const [userFormDetails, setUserFormDetails] = useState<UserFormInterface>({
        email: '',
        password: '',
    });
    const [userFormErrorHandler, setUserFormErrorHandler] =
        useState<userFormErrorHandlerInterface>({
            email: { state: false, message: '' },
            password: { state: false, message: '' },
        });

    const [passwordInput, setPasswordInput] = useState<boolean>(true);
    const handleFormSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const { name, value } = e.target;
        setUserFormDetails({
            ...userFormDetails,
            [name]: value,
        });

        setUserFormErrorHandler({
            ...userFormErrorHandler,
            [name]: {
                state: false,
                message: '',
            },
        });
    };
    return (
        <div className={styles.login__wrapper}>
            <div className={styles.login__container}>
                <span className={styles.login__container__title}>
                    Login To Continue
                </span>
                <div>
                    <div className={styles.input__container__group}>
                        <label
                            htmlFor='email'
                            className={`${styles.input__container} ${userFormErrorHandler.email.state ? styles.error__input__container__group : ''}`}
                        >
                            <input
                                required
                                id='email'
                                name='email'
                                value={userFormDetails.email}
                                onChange={(
                                    e: React.ChangeEvent<HTMLInputElement>,
                                ) => handleFormSubmit(e)}
                            />
                            <span className={styles.label__section}>Email</span>
                            <span className={styles.helper__text__section}>
                                {userFormErrorHandler.email.message ||
                                    'Helper Text'}
                            </span>
                        </label>
                    </div>
                    <div className={styles.input__container__group}>
                        <label
                            htmlFor='password'
                            className={`${styles.input__container} ${userFormErrorHandler.password.state ? styles.error__input__container__group : ''}`}
                        >
                            <input
                                required
                                type={passwordInput ? 'password' : 'text'}
                                id='password'
                                value={userFormDetails.password}
                                name='password'
                                onChange={(
                                    e: React.ChangeEvent<HTMLInputElement>,
                                ) => handleFormSubmit(e)}
                            />
                            <span className={styles.label__section}>
                                Password
                            </span>
                            <div
                                className={styles.suffix__icon}
                                onClick={() => setPasswordInput(!passwordInput)}
                            >
                                {passwordInput ? <FaRegEyeSlash /> : <GoEye />}
                            </div>
                            <span className={styles.helper__text__section}>
                                {userFormErrorHandler.password.message ||
                                    'Helper Text'}
                            </span>
                        </label>
                    </div>
                </div>
                <div className={styles.button__container}>
                    <Button fontSize={2}>Login</Button>
                </div>
            </div>
        </div>
    );
};

export default Login;
