import React, { useState } from 'react';
import { LoginPropsInterface, UserFormInterface } from './Login.interface';
import styles from './Login.module.css';
import { GoEye } from 'react-icons/go';
import { Button } from '@repo/ui/button';
import './Login.css';

const Login: React.FC<LoginPropsInterface> = () => {
    const [userFormDetails, setUserFormDetails] = useState<UserFormInterface>({
        email: '',
        password: '',
    });
    const handleFormSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const { name, value } = e.target;
        setUserFormDetails({
            ...userFormDetails,
            [name]: value,
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
                            className={styles.input__container}
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
                            <span>Helper Text</span>
                        </label>
                    </div>
                    <div className={styles.input__container__group}>
                        <label
                            htmlFor='password'
                            className={styles.input__container}
                        >
                            <input
                                required
                                type='password'
                                id='password'
                                value={userFormDetails.password}
                                name='password'
                            />
                            <span className={styles.label__section}>
                                Password
                            </span>
                            <span>Helper Text</span>
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
