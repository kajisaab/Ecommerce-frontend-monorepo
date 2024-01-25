import React from 'react';
import { LayoutPropsInterface } from './LayoutInterface';
import styles from './Layout.module.css';
import Sidebar from './Sidebar';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const Layout: React.FC<LayoutPropsInterface> = () => {
    return (
        <section className={styles.root__section}>
            <Header />
            <div className={styles.content__section}>
                <Sidebar />
                <div className={styles.content__wrapper}>
                    <Outlet />
                </div>
            </div>
        </section>
    );
};

export default Layout;
