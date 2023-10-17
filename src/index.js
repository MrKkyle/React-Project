import React from 'react';
import ReactDOM from 'react-dom/client';
import Navigation_Bar from './components/Navigation-bar';
import Form from './components/Form';
import Register_Form from './components/Register-form';
import '../src/Css/main.css';

/*
useEffect(()=> 
{
    window.onload = function(event)
    {
        $.post( "http://localhost:8000/session_variables.php", {action: "validate"})
        .done(function( _data) 
        {
            console.log("Data Loaded: " + _data);
            //If the user is not logged in already
            if(_data == false)
            {
                console.log("NOPE");
            }
            //If the user is logged in already
            if(_data == true)
            {
                console.log("YUP");
            }
        });
    }

}, []);
*/

export default function Main()
{
    return ( 
        <div>
            
            <Form Display = "block"/>
            <Register_Form Display = "none"/>
            <Navigation_Bar Display = "block"/>
        </div>
    );
}

/* ReactDOM enables us to render this element inside the real DOM*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);