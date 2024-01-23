import { Button } from '@repo/ui/button';
import '@repo/shared-styles/button.css';
import { Route, Routes } from 'react-router-dom';

function App() {
    return (
        <Routes>
            <Route path='/' element={<div>Home Page</div>} />
            <Route path='/contact' element={<div>Contact</div>} />
        </Routes>
    );
}

export default App;
