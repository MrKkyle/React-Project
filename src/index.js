import React from 'react';
import ReactDOM from 'react-dom/client';
import NavigationBar from './components/Navigation-bar';
import SplashScreen from './components/splashScreen';


import '../src/Css/main.css';

export default function Main()
{
    return ( 
        <div>
            <NavigationBar />
            <SplashScreen />
        </div>
    );
}

/* ReactDOM enables us to render this element inside the real DOM*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);