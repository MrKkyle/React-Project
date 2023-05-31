import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation_Bar from './components/Navigation-bar';
import SplashScreen from './components/splashScreen';


import '../src/Css/main.css';

export default function Main()
{
    return ( 
        <div>
            <Navigation_Bar />
            <SplashScreen />
        </div>

    );
}

/* ReactDOM enables us to render this element inside the real DOM*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);