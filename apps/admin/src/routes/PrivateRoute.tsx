import { lazy } from 'react';
import Layout from '../layout';
import { Navigate } from 'react-router-dom';
const Dashboard = lazy(() => import('../pages/Dashboard'));

function PrivateRoute() {
    return {
        element: <Layout />,
        children: [
            { path: '/dashboard', element: <Dashboard /> },
            {
                path: '*',
                element: <Navigate to='/dashboard' replace />,
            },
        ],
    };
}

export default PrivateRoute;
