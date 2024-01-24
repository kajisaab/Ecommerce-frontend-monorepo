import React from 'react';
import { LayoutPropsInterface } from './LayoutInterface';
import styles from './Layout.module.css';
import Sidebar from './Sidebar';
import Header from './Header';

const Layout: React.FC<LayoutPropsInterface> = () => {
    return (
        <section className={styles.root__section}>
            <Header />
            <div className={styles.content__section}>
                <Sidebar />

                <div className={styles.content__wrapper}>
                    Childrens will be here
                </div>
            </div>
        </section>
    );
};

export default Layout;
