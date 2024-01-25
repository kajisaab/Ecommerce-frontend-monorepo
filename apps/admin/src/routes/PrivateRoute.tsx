import { lazy } from 'react';
import Layout from '../layout';
import { Navigate } from 'react-router-dom';
import Product from '../pages/Product';
import Categories from '../pages/Categories';
import Orders from '../pages/Orders';
import Users from '../pages/Users';
import Vendor from '../pages/Vendor';
import Transactions from '../pages/Transactions';
const Dashboard = lazy(() => import('../pages/Dashboard'));

function PrivateRoute() {
    return {
        element: <Layout />,
        children: [
            { path: '/dashboard', element: <Dashboard /> },
            { path: '/productPage', element: <Product /> },
            { path: '/categoriesPage', element: <Categories /> },
            { path: '/ordersPage', element: <Orders /> },
            { path: '/usersPage', element: <Users /> },
            { path: '/vendorPage', element: <Vendor /> },
            {path: '/transactionsPage', element: <Transactions />},
            {
                path: '*',
                element: <Navigate to='/dashboard' replace />,
            },
        ],
    };
}

export default PrivateRoute;
