import {useEffect} from 'react';
import $ from "jquery";

/*
import NavigationBar2 from '../components/Navigation-bar2';
import Discord from '../Images/Socials/discord.png';
import Facebook from '../Images/Socials/facebook.png';
import Twitter from '../Images/Socials/twitter.png';
import Website from '../Images/Socials/web.png';
*/
import UserInformation from '../components/User-information';
import image from '../Images/Screenshot 2023-08-31 144726.png';
import video from '../Images/ruby-in-tower-of-fantasy.3840x2160.mp4';


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

        let button1 = document.getElementById("1");
        let button2 = document.getElementById("2");

        $.ajaxSetup({ xhrFields: { withCredentials: true }, });
        /*
        button1.addEventListener("click", () =>
        {
            $.post( "http://localhost:8000/session_variables.php", {action: "validate"})
            .done(function( _data) 
            {
                console.log("Data Loaded: " + _data);
            });
        });

        button2.addEventListener("click", () =>
        {
            $.post( "http://localhost:8000/session_variables.php", {action: "logout"})
            .done(function( _data) 
            {
                console.log("Data Loaded: " + _data);
            });
        });
        */

    }, []);

    return (
    <div>

        <UserInformation Heading1 = "Username" Heading2 = "Password" Image = {image}/>

        <video loop autoPlay muted className = "video" id = "video2">
            <source src = {video} type = "video/mp4"></source>
        </video>
        <div className = "user-tooltip" id = "_tooltip">User Information</div>
      
    </div>
    );
};
  

export default Home;