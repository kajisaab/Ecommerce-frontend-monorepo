import '@repo/shared-styles/button.css';
import { Route, Routes } from 'react-router-dom';
import PageNotFound from '@repo/ui/404Page';
import React from 'react';

function App() {
    return (
        <React.Suspense fallback={<span>Loading ....</span>}>
            <Routes>
                <Route path='/'>
                    <Route index element={<div>login</div>} />
                </Route>
                <Route path='/contact' element={<div>Contact</div>} />
                <Route path='*' element={<PageNotFound />} />
            </Routes>
        </React.Suspense>
    );
}

export default App;
