import {useEffect} from 'react';
import $ from "jquery";
import Auto_Slideshow from '../components/Auto-slideshow';
import NavigationBar2 from '../components/Navigation-bar2';
import image1 from '../Images/ToF_Wallpaper2022_01.png';
import image2 from '../Images/1.jpg';
import image3 from '../Images/ToF_Wallpaper2022_09.png';
import image4 from '../Images/ToF_Wallpaper2022_07.png';
import image5 from '../Images/ToF_Wallpaper2022_10.png';
import Discord from '../Images/Socials/discord.png';
import Facebook from '../Images/Socials/facebook.png';
import Twitter from '../Images/Socials/twitter.png';
import Website from '../Images/Socials/web.png';


function Home(props)
{
    useEffect(()=> 
    {
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
      <Auto_Slideshow id ="slideshow" Display = "block"
      Image1 = {image1} Image2 = {image2} Image3 = {image3} Image4 = {image4} Image5 = {image5}
      Text1 = "" Text2 = "" Text3 = "" Text4 = "" Text5 = ""/>
      <NavigationBar2 id = "navi-2" Display = "block"
        text1 = "Discord" onclick1 = {'https://www.toweroffantasy-global.com/collaboration/nitro/'} Social1 = {Discord}
        text2 = "Facebook" onclick2 = {'https://www.facebook.com/TowerofFantasy.Official'} Social2 = {Facebook}
        text3 = "Twitter " onclick3 = {'https://twitter.com/ToF_EN_Official'} Social3 = {Twitter}
        text4 = "Website " onclick4 = {'https://www.toweroffantasy-global.com'} Social4 = {Website}
      />
      <button className = "button" id = "1">Validate values</button>
      <button className = "button" id = "2">Logout values</button>
    </div>
    );
};
  

export default Home;