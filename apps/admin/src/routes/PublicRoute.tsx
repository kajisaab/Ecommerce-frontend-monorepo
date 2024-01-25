import Login from '../pages/Login';
import PageNotFound from '@repo/ui/404Page';

function PublicRoute() {
    return [
        {
            path: '/',
            element: <Login />,
        },
        {
            path: '*',
            element: <PageNotFound />,
        },
    ];
}

export default PublicRoute;
