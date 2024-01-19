import { Button } from '@repo/ui/button';
import './App.css';
import '@repo/shared-styles/button.css';

function App() {
    return (
        <>
            <Button className='button__class' appName='Aman'>
                Click me
            </Button>
            <button className='button__style'>Click</button>
        </>
    );
}

export default App;
