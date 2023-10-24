import '../Css/Background.css';
import {useEffect} from 'react';
import $ from "jquery";

function Background3(props)
{

    useEffect(()=> 
    {
        $.ajaxSetup({ xhrFields: { withCredentials: true }, });

        /* Get the form */
        let login_form = document.getElementById("login-f");
        let _information = document.getElementById("_information");
        let ul = document.getElementById("table");
        let container = document.getElementById("container");
        /* Login form submission event */
        login_form.onsubmit = function(event)
        {
            /* allows time for a form submission to be processed first */
            setTimeout(() =>
            {
                /* Checks if the user is logged, and displays certain elements */
                $.post( "http://localhost:8000/session_variables.php", {action: "validate"})
                .done(function( _data) 
                {
                    if(_data === "true")
                    { 
                        /*
                        ul.style.zIndex = "0";
                        container.style.zIndex = "2";
                        */
                        _information.style.display = "block";
                    }
                    else //if not logged
                    { 
                        _information.style.display = "none";
                    }
                });
            }, 500);
        }

        /* Guest mode button event */
        let guest_button = document.getElementById("guest");
        guest_button.addEventListener("click", () =>
        {
            $.post( "http://localhost:8000/session_variables.php", {action: "validate"})
            .done(function( _data) 
            {
                _information.style.display = "none";
            });
        });

        /* Logout button event */
        let navigation = document.getElementById("navigation");
        let logout = document.getElementById("logout");
        let logout_confirm = document.querySelector(".logout-confirm");
        let logout_yes = document.getElementById("yes-btn");
        let logout_no = document.getElementById("no-btn");
        let video2 = document.getElementById("video2");
        logout.addEventListener("click", () => 
        {

            logout_confirm.style.display = "block";
            logout_yes.onclick = function(event)
            {
                $.post( "http://localhost:8000/session_variables.php", {action: "logout"})
                .done(function( _data) 
                {
                    console.log("Data sent: " + _data);
                    /* Fade Out */
                    navigation.style.animation = "Fadeout 1s ease-out";
                    video2.style.animation = "Fadeout 1s ease-out";

                    /* Fade in */
                    setTimeout(() =>
                    {
                        /* Perform animations */
                        navigation.style.display = "none";
                        video2.style.display = "none";
                        window.location.reload();
                    }, 500);
                });
            }   
            logout_no.onclick = function(event)
            {
                logout_confirm.style.display = "none";
            }
        });

        setTimeout(() =>
        {
            container.style.zIndex = "2";
        },3000);


        let navbar = document.querySelector(".navbar");
        var txt = document.querySelector(".text-container").innerHTML;
        document.querySelector(".text-container").innerHTML = "";
        var speed = 28;
        var i = 0;
        function typeWriter() 
        {
            if (i < txt.length)
            {
                document.querySelector(".text-container").innerHTML += txt.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            }
        }
        
        navbar.onclick = function(event)
        {
            txt = ""
        }
        
        setTimeout(() =>
        {
            typeWriter();
        }, 2000);

        /* Removes any background color if there is no text */
        let diamond = document.querySelectorAll(".ul.li");
        for(let i = 0; i < diamond.length; i++)
        {
            if(diamond[i].firstChild.firstChild.innerHTML === "")
            {
                diamond[i].firstChild.firstChild.style.backgroundColor = "transparent";
            }
        }

    }, []);
    return (
    <>   
        <div className = "container" id = "container">
            <div className = "text">
                {props.Title}
                <hr style = {{display: props.hr}}/>
            </div>
            <div className = "text-container">
                {props.Text}
            </div>
        </div>
        
        <div className = "logout-confirm">
            Proceed to Logout?<br /><br />
            <button className = "no-btn" id = "no-btn">No</button> <button className = "yes-btn" id ="yes-btn">Yes</button>
        </div>
        
    </>     
    );
  
};
Background3.defaultProps = 
{
	Title: "Add a title here",
    Text: "Add some text here",
    Background: "",
    hr : "block"
}
export default Background3;