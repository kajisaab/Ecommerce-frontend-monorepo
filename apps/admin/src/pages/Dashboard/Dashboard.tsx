import React from 'react';
import { DashboardPropsInterface } from './Dashboard.interface';
import styles from './Dashboard.module.css';

const Dashboard: React.FC<DashboardPropsInterface> = () => {
    return <div className={styles.dashboard__wrapper}>Dashboard</div>;
};

export default Dashboard;
