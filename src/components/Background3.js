import '../Css/Background.css';
import {useEffect} from 'react';
import $ from "jquery";

function Background3(props)
{

    useEffect(()=> 
    {
        $.ajaxSetup({ xhrFields: { withCredentials: true }, });
        let login_form = document.getElementById("login-f");
        let _information = document.getElementById("_information");
        let container = document.getElementById("container");
        /* Login form submission event */
        login_form.onsubmit = function(event)
        {
            /* allows time for a form submission to be processed first */
            setTimeout(() =>
            {
                console.log("YS");
                /* Checks if the user is logged, and displays certain elements */
                $.post( "http://localhost:8000/session_variables.php", {action: "validate"})
                .done(function( _data) 
                {
                    if(_data === "true")
                    { 
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
                    container.style.animation = "Fadeout 1s ease-out";

                    /* Fade in */
                    setTimeout(() =>
                    {
                        /* Perform animations */
                        navigation.style.display = "none";
                        container.style.display = "none";

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
            $.post( "http://localhost:8000/session_variables.php", {action: "validate"})
            .done(function( _data) 
            {
                if(_data = "true")//Logged IN ELEMENTS
                {
                    
                }
                else//Logged OUT ELEMENTS
                {
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
                }
            });
        }, 1000);

        

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
        <div className = "background-image" style = {{backgroundImage: `url(${props.Background})`}}>
            <div className = "container" id = "container">
                <div className = "text">
                    {props.Title}
                    <hr style = {{display: props.hr}}/>
                </div>
                <div className = "text-container">
                    {props.Text}
                </div>
            </div>
            <div className = "ul" id = "table" style = {{width: '1880px', height: '980px', overflow: 'hidden'}}>
                <li className = "ul li diamond1" style = {{display: 'block', left: '23%', top: '-7%', width: '600px', height: '600px'}}><div className = "image"><div className = "text"></div></div></li>
                <li className = "ul li diamond2" style = {{display: 'block', left: '50%', top: '46%', width: '600px', height: '600px'}}><div className = "image"><div className = "text"></div></div></li>
                <li className = "ul li diamond3" style = {{display: 'block', left: '77%', top: '-7%', width: '600px', height: '600px'}}><div className = "image"><div className = "text"></div></div></li>
                <li className = "ul li diamond4" style = {{display: 'block', left: '23%', top: '99%', width: '600px', height: '600px'}}><div className = "image"><div className = "text"></div></div></li>
                <li className = "ul li diamond5" style = {{display: 'block', left: '77%', top: '99%', width: '600px', height: '600px'}}><div className = "image"><div className = "text"></div></div></li>
                <li className = "ul li diamond6" style = {{display: 'block', left: '-4%', top: '46%', width: '600px', height: '600px'}}><div className = "image"><div className = "text"></div></div></li>
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