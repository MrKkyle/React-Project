import {useEffect} from 'react';
import $ from "jquery";
import UserInformation from '../components/User-information';
import image from '../Images/Screenshot 2023-08-31 144726.png';
import video from '../Images/Live-Wallpapers/ruby-in-tower-of-fantasy.3840x2160.mp4';
import '../Css/main.css';

function Home(props)
{
    useEffect(()=> 
    {
    
        let user = document.getElementById("user");
        let navigation = document.getElementById("navigation");
        let user_information = document.getElementById("user-information");
        let close = document.getElementById("close");
        user.addEventListener("click", () =>
        {
            let _user = document.getElementById("_username");
            let _pass = document.getElementById("_password");
            //Retrieve data for the page
            $.ajax
            ({
                type: "POST",
                action: 'validate',
                url: "http://localhost:8000/submit.php",
                data: {action: 'validate'}, //the data you submit with the request
                dataType: 'json',
                success(data) 
                {
                    console.log(data);
                    _user.innerHTML = data['username'];
                    _pass.value = data['key']
                },
            });

            navigation.style.animation = "Fadeout 1s ease-out";
            setTimeout(() =>
            {
                navigation.style.display = "none";
                user_information.style.animation = "FadeIn 1s ease-in";
                user_information.style.display = "block";
            }, 900);
        });

        close.addEventListener("click", () => 
        {   
            user_information.style.animation = "Fadeout 1s ease-out";
            
            setTimeout(() =>
            {
                user_information.style.display = "none";
                navigation.style.animation = "FadeIn 1s ease-in";
                navigation.style.display = "block";
                navigation.style.opacity = "1";

            }, 900);
        });


        $.ajaxSetup({ xhrFields: { withCredentials: true }, });

        /* Get the form */
        let login_form = document.getElementById("login-f");
        let _information = document.getElementById("_information");
        /* Login form submission event */
        login_form.onsubmit = function(event)
        {
            /* allows time for a form submission to be processed first */
            setTimeout(() =>
            {
                $.post( "http://localhost:8000/session_variables.php", {action: "validate"})
                .done(function( _data) 
                {
                    if(_data === "true") { _information.style.display = "block"; }
                    else { _information.style.display = "none"; }
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

    }, []);

    return (
    <div>

        <UserInformation Heading1 = "Username" Heading2 = "Password" Image = {image}/>

        <video loop autoPlay muted className = "video" id = "video2">
            <source src = {video} type = "video/mp4"></source>
        </video>
        <div className = "user-tooltip" id = "_tooltip">User Information</div>
        <div className = "alpha"></div>

        <div className = "logout-confirm">
            Proceed to Logout?<br /><br />
            <button className = "no-btn" id = "no-btn">No</button> <button className = "yes-btn" id ="yes-btn">Yes</button>
        </div>
      
    </div>
    );
};
  

export default Home;