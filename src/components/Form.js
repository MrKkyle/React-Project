import {useState} from "react";
import {useEffect} from 'react';
import $ from "jquery";

import video from '../Images/annabella-from-tower-of-fantasy.1920x1080.mp4';
import logo from '../Images/ToF logo.png';
import '../Css/Form.css';
function Form(props)
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

    useEffect(()=> 
    {
        let navigation = document.getElementById("navigation");
        let navi2 = document.getElementById("navi-2");
        let video = document.getElementById("video");
        navigation.style.display = "none";

        let director = document.getElementById("director");
        let register_form = document.getElementById("register-form");
        let login_form = document.getElementById("login-form");
        let guest = document.getElementById("guest");

        //redirects to registration page
        director.addEventListener("click", () =>
        {
            login_form.style.animation = "Fadeout ease-out 1s";
            login_form.style.display = "none";

            register_form.style.animation = "FadeIn ease-in 1s";
            register_form.style.display = "block";
        });

        
        let message = document.getElementById("message");
        function checkLogin() 
        {
            if(message.innerHTML !== "")
            {
                message.style.display = "block";
                if(message.innerHTML === "login-true")
                {
                    message.innerHTML = "Login Sucessfully";
                    message.style.backgroundColor = "rgb(6, 133, 6)";
                    setTimeout(() =>
                    {
                        message.innerHTML = "";
                        message.style.backgroundColor = "transparent";
                        login_form.style.animation = "Fadeout ease-out 1s";
                        login_form.style.display = "none";
                        login_form.style.opacity = "0";
                        video.style.display = "none";
                        navigation.style.display = "block";
                    }, 2000);
                }
                else if(message.innerHTML === "login-false")
                {
                    message.innerHTML = "Login Failed";
                    message.style.backgroundColor = "rgb(175, 11, 11)";
                    setTimeout(() =>
                    {
                        //reloads the browser
                        window.location.reload();
                    }, 2000);
                }
            }
            const sop = setTimeout(checkLogin, 2000);//frequency of check made to server

            //guest mode
            guest.addEventListener("click", () =>
            {
                login_form.style.display = "none";
                register_form.style.display = "none";
                video.style.display = "none";
                navigation.style.display = "block";
                clearTimeout(sop);
            });
        }
        checkLogin();
    }, []);

    return (
    <div>
        <video loop autoPlay muted className = "video" id = "video">
            <source src = {video} type = "video/mp4"></source>
        </video>
        <div className = 'modal1' id = "login-form" style = {{display: props.Display}}>
            <form className = 'modal-content' method = 'post' onSubmit={(event) => handleSubmit(event)}>
                
                <div className = 'img-container'>
                    <img className = 'avatar' src = {logo}></img>
                </div>
                <div className = 'modal-container'>
                    <label><b>Username</b></label>
                    <span><input type = 'text' placeholder = "Enter your name"  name = "username" value = {inputs.username || ""} onChange = {handleChange} ></input></span>

                    <label><b>Password</b></label>
                    <span><input type = 'password' placeholder = "Enter password" name = "password" value = {inputs.password || ""} onChange = {handleChange}></input></span>

                    <button id = "login" className = 'button' type = 'submit'>Login</button> or <a id = "director" style={{textDecoration: 'underline', cursor: 'pointer'}}>Register</a>
                    <br />
                    <br />
                    <hr /> or <hr />
                    <button id = "guest" className = "redirect-button">Guest Mode</button>
                    
                </div>
            </form>
            <div className = "info-message" id = "message">{result}</div>
        </div>   
    </div>    
    );
}

Form.defaultProps = 
{
    Display: "None"
}
export default Form;

