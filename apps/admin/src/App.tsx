import '@repo/shared-styles/button.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';

function App() {
    const isAuthenticated = true;
    //Combine and conditionally include routes based on authentication status
    const router = createBrowserRouter([
        isAuthenticated ? PrivateRoute() : {},
        ...PublicRoute(),
    ]);
    return <RouterProvider router={router} />;
}

export default App;
