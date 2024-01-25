import React, { useState } from 'react';
import { SidebarPropsInterface } from './Sidebar.interface';
import { AiOutlineHome } from 'react-icons/ai';
import { IoBagOutline } from 'react-icons/io5';
import { TbCategory } from 'react-icons/tb';
import { MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { FaRegCircleUser } from 'react-icons/fa6';
import { BsShop } from 'react-icons/bs';
import { GrCurrency } from 'react-icons/gr';
import { IoIosArrowDown } from 'react-icons/io';

import styles from './Sidebar.module.css';

const Sidebar: React.FC<SidebarPropsInterface> = () => {
    const [collapseSideBar, setCollapseSideBar] = useState<boolean>(false);
    return (
        <div className={styles.menu__bar}>
            <div
                className={`${styles.menu} ${collapseSideBar ? styles.collapse__sidebar : ''}`}
            >
                <ul className={styles.menu__links}>
                    <li id='dashboardMenuItem' className={styles.nav__links}>
                        <a href='dashboardPage'>
                            <AiOutlineHome
                                fontSize={24}
                                className={styles.icon}
                            />
                            <span className={styles.text}>Dashboard</span>
                        </a>
                        <span className={styles.tooltip}>Dashboard</span>
                    </li>
                    <li id='productMenuItem' className={styles.nav__links}>
                        <a href='productPage'>
                            <MdOutlineProductionQuantityLimits
                                fontSize={24}
                                className={styles.icon}
                            />
                            <span className={styles.text}>Product</span>
                        </a>
                        <span className={styles.tooltip}>product</span>
                    </li>
                    <li id='categoriesMenuItem' className={styles.nav__links}>
                        <a href='categoriesPage'>
                            <TbCategory fontSize={24} className={styles.icon} />
                            <span className={styles.text}>Categories</span>
                        </a>
                        <span className={styles.tooltip}>Categories</span>
                    </li>
                    <li id='orderMenuItem' className={styles.nav__links}>
                        <a href='ordersPage'>
                            <IoBagOutline
                                fontSize={24}
                                className={styles.icon}
                            />
                            <span className={styles.text}>Orders</span>
                        </a>
                        <span className={styles.tooltip}>Orders</span>
                    </li>
                    <li id='usersMenuItem' className={styles.nav__links}>
                        <a href='usersPage'>
                            <FaRegCircleUser
                                fontSize={24}
                                className={styles.icon}
                            />
                            <span className={styles.text}>Users</span>
                        </a>
                        <span className={styles.tooltip}>Users</span>
                    </li>
                    <li id='vendorMenuItem' className={styles.nav__links}>
                        <a href='vendorPage'>
                            <BsShop fontSize={24} className={styles.icon} />
                            <span className={styles.text}>Vendor</span>
                        </a>
                        <span className={styles.tooltip}>Vendor</span>
                    </li>
                    <li id='transactionsMenuItem' className={styles.nav__links}>
                        <a href='transactionsPage'>
                            <GrCurrency fontSize={24} className={styles.icon} />
                            <span className={styles.text}>Transactions</span>
                        </a>
                        <span className={styles.tooltip}>Transactions</span>
                    </li>
                </ul>
            </div>
            <div
                className={styles.toggle__area}
                onClick={() => setCollapseSideBar(!collapseSideBar)}
            >
                <div
                    className={`${styles.toggle__container} ${collapseSideBar ? styles.rotate__toggle__container : ''}`}
                    onClick={() => setCollapseSideBar(!collapseSideBar)}
                >
                    <IoIosArrowDown />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
