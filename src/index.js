import React from 'react';
import ReactDOM from 'react-dom/client';
import NavigationBar from './components/Navigation-bar';
import SplashScreen from './components/splashScreen';
import Form from './components/Form';
import Register_Form from './components/Register-form';
import image from './Images/ToF_Wallpaper2022_01.png';


import '../src/Css/main.css';

export default function Main()
{
    return ( 
        <div>
            
            <Form Display = "block"/>
            <Register_Form Display = "none"/>
            <SplashScreen Text = "Tower of Fantasy" Background = {image}/>
            <NavigationBar Display = "block"/>
        </div>
    );
}

/* ReactDOM enables us to render this element inside the real DOM*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);