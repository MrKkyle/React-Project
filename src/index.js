import React from 'react';
import ReactDOM from 'react-dom';
import Form from './components/Form'

/* Must start with a Caps letter */
function Background()
{
    return (
        <>
            <h2>Hi, I am a background</h2>
            <Form />
        </>
    );
}


const element = <h1> Hello World</h1>;

/* ReactDOM enables us to render this element inside the real DOM*/
ReactDOM.render(<Background />, document.getElementById("root"));




