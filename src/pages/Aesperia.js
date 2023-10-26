import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import $ from "jquery";
import Background2 from '../components/Background2';
import Image1 from '../Images/Simulacra.jpg';
import Image2 from '../Images/enemies.jpg';
import Image3 from '../Images/worldboss.jpg';
import Image4 from '../Images/Artificial-Island.jpg';
import Image5 from '../Images/Hykros.jpg';
import Image6 from '../Images/Banges.png';
import Image7 from '../Images/SnowField.png';
import video from '../Images/Live-Wallpapers/Encounters-Tower-Of-Fantasy-3840x2160.mp4';

function Aesperia()
{ 
    useEffect(()=> 
    {
        $.ajaxSetup({ xhrFields: { withCredentials: true }, });
        /* Get the form */
        let _information = document.getElementById("_information");
        /* Login form submission event */
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
                table.style.animation = "FadeIn 1.5s ease-in";
                setTimeout(() =>
                {
                    table.style.display = "block";
                },1500);
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
                dia.style.border = "2px solid rgb(51, 48, 48)";
                background.style.zIndex = "";

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
        let video3 = document.getElementById("video3");
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
                    video3.style.animation = "Fadeout 1.5s ease-out";
                    table.style.animation = "Fadeout 1.5s ease-out";

                    /* Fade in */
                    setTimeout(() =>
                    {
                        /* Perform animations */
                        navigation.style.display = "none";
                        table.style.display = "none";
                        video3.style.display = "none";
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
    navigate('/aesperiaSimulacra');
    };
    const navigateToEnemies = () => 
    {
    navigate('/aesperiaEnemies');
    };
    const navigateToWorldBosses = () => 
    {
    navigate('/aesperiaWorldBosses');
    };
    const navigateToArtificialIsland = () => 
    {
    navigate('/ArtificialIsland');
    };
    const navigateToHykros = () => 
    {
    navigate('/Hykros');
    };
    const navigateToBanges = () => 
    {
    navigate('/Banges');
    };
    const navigateToWarren = () => 
    {
    navigate('/Warren');
    };
  return (
    <div>
        <Background2
                        onclick1 = {navigateToSimulacra} image1 = {Image1} text1 = "Simulacra" display1 = "block"
                        onclick2 = {navigateToEnemies} image2 = {Image2} text2 = "Enemies" display2 = "block"
                        onclick3 = {navigateToWorldBosses} image3 = {Image3} text3 = "World-Bosses" display3 = "block"
                        onclick4 = {navigateToArtificialIsland} image4 = {Image4} text4 = "Artificial-Island" display4 = "block"
                        onclick5 = {navigateToHykros} image5 = {Image5} text5 = "Hykros" display5 = "block"
                        onclick6 = {navigateToBanges} image6 = {Image6} text6 = "Banges" display6 = "block"
                        onclick7 = {navigateToWarren} image7 = {Image7} text7 = "Warren-Snowfield" display7 = "block"
        />
        <video loop autoPlay muted className = "video" id = "video3">
            <source src = {video} type = "video/mp4"></source>
        </video>
        <div className = "logout-confirm">
            Proceed to Logout?<br /><br />
            <button className = "no-btn" id = "no-btn">No</button> <button className = "yes-btn" id ="yes-btn">Yes</button>
        </div>
    </div>
  );
  
};

export default Aesperia;
