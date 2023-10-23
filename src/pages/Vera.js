import {useNavigate} from 'react-router-dom';
import {useEffect} from 'react';
import $ from "jquery";
import Background2 from '../components/Background2';
import Image1 from '../Images/Simulacra.jpg';
import Image2 from '../Images/enemies.jpg';
import Image3 from '../Images/worldboss.jpg';
import Image4 from '../Images/Twilight_Zone.png';
import Image5 from '../Images/Grayspace.png';
import Image6 from '../Images/Mirroria.png';
import Image7 from '../Images/Miasmic_Swamp.jpg';
import Image8 from '../Images/confoundingAbyss.png';
import Image9 from '../Images/innars.jpg';
import video from '../Images/Live-Wallpapers/ruby-in-tower-of-fantasy.3840x2160.mp4';

function Vera()
{
    useEffect(()=> 
    {
    
        $.ajaxSetup({ xhrFields: { withCredentials: true }, });

        /* Get the form */
        let _information = document.getElementById("_information");
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

        let background = document.getElementById("background");
        let diamonds = document.querySelectorAll(".ul.li");
        
        for(let i = 0; i < diamonds.length; i++)
        {
            let dia = diamonds[i];
            //Child elements to identify empty diamond| takes the image for the background
            let child = dia.firstElementChild.firstElementChild;
            let child_image = dia.firstElementChild.style.backgroundImage;
            diamonds[i].onmouseover = function(event)
            {
                if(dia.onmouseover && child.innerHTML !== "")
                {
                    //Background + text changes 
                    background.style.backgroundImage = child_image;
                    background.style.zIndex = "1";
                    dia.style.border = "2px solid rgb(22 21 21)";

                    //hide all other elements besides this one
                    for(let z = 0; z < diamonds.length; z++)
                    {
                    //fadeout other containers besides this one
                    dia.style.animation = "none";
                    dia.style.opacity = "1";
                    diamonds[z].style.animation = "Fadeout ease-in-out 0.7s";
                    diamonds[z].style.opacity = "0";
                    }
                }
                dia.onmouseleave = function(event)
                {
                    dia.style.borderStyle = "";
                    background.style.zIndex = "";
                    dia.style.border = "2px solid rgb(51, 48, 48)";


                    //show all diamonds
                    for(let z = 0; z < diamonds.length; z++)
                    {
                    dia.style.animation = "none";
                    diamonds[z].style.display = "block";
                    diamonds[z].style.animation = "FadeIn ease-in 0.7s";
                    diamonds[z].style.opacity = "1";
                    }
                }
            }
        }
        /* Logout button event*/
        let navigation = document.getElementById("navigation");
        let logout = document.getElementById("logout");
        let logout_confirm = document.querySelector(".logout-confirm");
        let logout_yes = document.getElementById("yes-btn");
        let logout_no = document.getElementById("no-btn");
        let table = document.getElementById("table");
        let video4 = document.getElementById("video4");
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
                    navigation.style.animation = "Fadeout 1.5s ease-out";
                    video4.style.animation = "Fadeout 1.5s ease-out";
                    table.style.animation = "Fadeout 1.5s ease-out";

                    /* Fade in */
                    setTimeout(() =>
                    {
                        /* Perform animations */
                        navigation.style.display = "none";
                        table.style.display = "none";
                        video4.style.display = "none";
                        window.location.reload();
                    }, 1000);
                });
            }   
            logout_no.onclick = function(event)
            {
                logout_confirm.style.display = "none";
            }
        });

    }, []);
    const navigate = useNavigate();
    const navigateToSimulacra = () => 
    {
      navigate('/veraSimulacra');
    };
    const navigateToEnemies = () => 
    {
      navigate('/veraEnemies');
    };
    const navigateToGraySpace = () => 
    {
      navigate('/graySpace');
    };
    const navigateToMirroria = () => 
    {
      navigate('/Mirroria');
    };
    const navigateToConfoundingByss = () => 
    {
      navigate('/confoundingAbyss');
    };
    const navigateToInnars = () => 
    {
      navigate('/innars');
    };
    const navigateToMiasmicSwamp = () => 
    {
      navigate('/miasmicSwamp');
    };
    const navigateToTwilightZone = () => 
    {
      navigate('/twilightZone');
    };
    const navigateToWorldBosses = () => 
    {
      navigate('/veraWorldBosses');
    };
    return (
        <div>
            <Background2
            onclick1 = {navigateToSimulacra} image1 = {Image1} text1 = "Simulacra" display1 = "block"
            onclick2 = {navigateToEnemies} image2 = {Image2} text2 = "Enemies" display2 = "block"
            onclick3 = {navigateToWorldBosses} image3 = {Image3} text3 = "World-Bosses" display3 = "block"
            onclick4 = {navigateToTwilightZone} image4 = {Image4} text4 = "Twilight Zone" display4 = "block"
            onclick5 = {navigateToGraySpace} image5 = {Image5} text5 = "GraySpace" display5 = "block"
            onclick6 = {navigateToMirroria} image6 = {Image6} text6 = "Mirroria" display6 = "block"
            onclick7 = {navigateToMiasmicSwamp} image7 = {Image7} text7 = "Miasmic Swamp" display7 = "block"
            onclick8 = {navigateToConfoundingByss} image8 = {Image8} text8 = "Confounding Abyss" display8 = "block"
            onclick9 = {navigateToInnars} image9 = {Image9} text9 = "Innars" display9 = "block"
            />
            <video loop autoPlay muted className = "video"  id = "video4">
                <source src = {video} type = "video/mp4"></source>
            </video>
            
            <div className = "logout-confirm">
                Proceed to Logout?<br /><br />
                <button className = "no-btn" id = "no-btn">No</button> <button className = "yes-btn" id ="yes-btn">Yes</button>
            </div>
        </div>

    );

};
  
export default Vera;