import {useEffect} from 'react';
import $ from "jquery";

import NavigationBar2 from '../components/Navigation-bar2';
import UserInformation from '../components/User-information';
import Discord from '../Images/Socials/discord.png';
import Facebook from '../Images/Socials/facebook.png';
import Twitter from '../Images/Socials/twitter.png';
import Website from '../Images/Socials/web.png';


function Home(props)
{
    useEffect(()=> 
    {

        let user = document.getElementById("user");
        let navigation = document.getElementById("navigation");
        let user_information = document.getElementById("user-information");
        user.addEventListener("click", () =>
        {
            navigation.style.animation = "Fadeout 1s ease-out";
            
            setTimeout(() =>
            {
                navigation.style.display = "none";
                user_information.style.animation = "fadeIn 1s ease-in";
                user_information.style.display = "block";
                user_information.style.opacity = "1";

            }, 900);
            
        });





        let button1 = document.getElementById("1");
        let button2 = document.getElementById("2");
        $.ajaxSetup({ xhrFields: { withCredentials: true }, });
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


    }, []);

    return (
    <div>
      <NavigationBar2 id = "navi-2" Display = "block"
        text1 = "Discord" onclick1 = {'https://www.toweroffantasy-global.com/collaboration/nitro/'} Social1 = {Discord}
        text2 = "Facebook" onclick2 = {'https://www.facebook.com/TowerofFantasy.Official'} Social2 = {Facebook}
        text3 = "Twitter " onclick3 = {'https://twitter.com/ToF_EN_Official'} Social3 = {Twitter}
        text4 = "Website " onclick4 = {'https://www.toweroffantasy-global.com'} Social4 = {Website}
      />

      <UserInformation />
      <button className = "button" id = "1">Validate values</button>
      <button className = "button" id = "2">Logout values</button>
    </div>
    );
};
  

export default Home;