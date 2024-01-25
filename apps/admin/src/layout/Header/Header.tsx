import React from 'react';
import { HeaderPropsInterface } from './Header.interface';
import styles from './Header.module.css';

const Header: React.FC<HeaderPropsInterface> = () => {
    return (
        <header className={styles.header__wrapper}>
            <div className={styles.header__left__container}>Logo Section</div>
            <div className={styles.header__right__container}>
                Control Section
            </div>
        </header>
    );
};

export default Header;
