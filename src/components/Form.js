import {useState} from "react";
import $ from "jquery";
function Form()
{
    const[inputs, setInputs] = useState({});
    const [result, setResult] = useState("");
    const handleChange = (event) =>
    {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }
    
    const handleSubmit = (event) =>
    {
        event.preventDefault();
        const form = $(event.target);
        $.ajax
        ({
            type: "post",
            url: 'http://localhost:8000/submit.php',
            data: form.serialize(),
            success(data) 
            {
                setResult(data);
            },
        });
    }

    /* name property is required when creating forms, 
       since the values are only eligible if the 
       set name of that value is set in the form
    */   

    return (
    <div className = 'modal'>
        <form className = 'modal-content' method = 'post' onSubmit={(event) => handleSubmit(event)}>

            <div className = 'img-container'>
                <img className = 'avatar'></img>
            </div>
            <div className = 'modal-container'>
                <label><b>Username</b></label>
                <span><input type = 'text' placeholder = "Enter your name"  name = "username" value = {inputs.username || ""} onChange = {handleChange} required></input></span>

                <label><b>Password</b></label>
                <span><input type = 'password' placeholder = "Enter password" name = "password" value = {inputs.password || ""} onChange = {handleChange} required></input></span>

                <button className = 'button' type = 'submit'>Submit</button>
            </div>
        </form>
        <h1>{result}</h1>
    </div>
    );
}

export default Form;