import React from 'react';
import ReactDOM from 'react-dom/client';
import NavigationBar from './components/Navigation-bar';
import SplashScreen from './components/splashScreen';
import image from './Images/ToF_Wallpaper2022_01.png';


import '../src/Css/main.css';

export default function Main()
{
    return ( 
        <div>
            <NavigationBar />
            <SplashScreen Text = "Tower of Fantasy" Background = {image}/>
        </div>
    );
}

/* ReactDOM enables us to render this element inside the real DOM*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);