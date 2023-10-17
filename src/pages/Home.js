import {useEffect} from 'react';
import $ from "jquery";

import NavigationBar2 from '../components/Navigation-bar2';
import UserInformation from '../components/User-information';
import Discord from '../Images/Socials/discord.png';
import Facebook from '../Images/Socials/facebook.png';
import Twitter from '../Images/Socials/twitter.png';
import Website from '../Images/Socials/web.png';
import image from '../Images/Screenshot 2023-08-31 144726.png';
import video from '../Images/ruby-in-tower-of-fantasy.3840x2160.mp4';


function Home(props)
{
    useEffect(()=> 
    {
        window.onload = function(event)
        {
            let video = document.getElementById("video2");
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
                    _user.innerHTML = data['username'];
                    _pass.value = data['key']
                },
            });
        }

        let user = document.getElementById("user");
        let navigation = document.getElementById("navigation");
        let navi2 = document.getElementById("mySidenav");
        let user_information = document.getElementById("user-information");
        let close = document.getElementById("close");
        user.addEventListener("click", () =>
        {
            navigation.style.animation = "Fadeout 1s ease-out";
            navi2.style.animation = "Fadeout 1s ease-out";
            
            setTimeout(() =>
            {
                navigation.style.display = "none";
                navi2.style.display = "none";
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
                navi2.style.animation = "FadeIn 1s ease-in";
                navi2.style.display = "block";
                navi2.style.opacity = "1";

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
        <NavigationBar2 id = "navi-2" Display = "block"
        text1 = "Discord" onclick1 = {'https://www.toweroffantasy-global.com/collaboration/nitro/'} Social1 = {Discord}
        text2 = "Facebook" onclick2 = {'https://www.facebook.com/TowerofFantasy.Official'} Social2 = {Facebook}
        text3 = "Twitter " onclick3 = {'https://twitter.com/ToF_EN_Official'} Social3 = {Twitter}
        text4 = "Website " onclick4 = {'https://www.toweroffantasy-global.com'} Social4 = {Website}
        />

        <UserInformation Heading1 = "Username" Heading2 = "Password" Image = {image}/>
        <video loop autoPlay muted className = "video" id = "video2" style = {{display: 'none'}}>
            <source src = {video} type = "video/mp4"></source>
        </video>
      
    </div>
    );
};
  

export default Home;