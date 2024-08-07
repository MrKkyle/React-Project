import '../Css/Background.css';
import {useEffect} from 'react';
import $ from "jquery";
import image from '../Images/Screenshot 2023-08-31 144726.png';
import UserInformation from './User-information';

/* Must start with a Caps letter */
function Background2({background, onclick1, display1, text1, image1, onclick2, display2, text2, image2, onclick3, display3, text3, image3, onclick4, display4, text4, image4, onclick5, display5, text5, image5, onclick6, display6, text6, image6, onclick7, display7, text7, image7, onclick8, display8, text8, image8, onclick9, display9, text9, image9, onclick10, display10, text10, image10, onclick11, display11, text11, image11, onclick12, display12, text12, image12, onclick13, display13, text13, image13, onclick14, display14, text14, image14, onclick15, display15, text15, image15, onclick16, display16, text16, image1, onclick17, display17, text17, image17
})
{
    useEffect(()=> 
	{
        // Setting default value for props
        display1= 'block'
        display2= 'block'
        display3= 'block'
        display4= 'block'
        display5= 'block'
        display6= 'block'
        display7= 'block'
        display8= 'block'
        display9= 'block'
        display10= 'block'
        display11= 'block'
        display12= 'block'
        display13= 'block'
        display14= 'block'
        display15= 'block'
        display16= 'block'
        display17= 'block'

        /* Removes any background color if there is no text */
        let diamond = document.querySelectorAll(".ul.li");
        for(let i = 0; i < diamond.length; i++)
        {
            if(diamond[i].firstChild.firstChild.innerHTML === "")
            {
                diamond[i].firstChild.firstChild.style.backgroundColor = "transparent";
            }
        }

        /* Additional Scripts not originally part of background2 */
        let table = document.getElementById("table");
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

            table.style.animation = "Fadeout 1s ease-out";
            navigation.style.animation = "Fadeout 1s ease-out";
            setTimeout(() =>
            {
                table.style.display = "none";
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
                table.style.animation = "FadeIn 1s ease-in";
                table.style.display = "block";
                table.style.opacity = "1";

            }, 900);
        });

        let tooltip = document.getElementById("_tooltip");

        user.addEventListener("mouseenter", () =>
        {
            tooltip.style.animation = "FadeIn 0.5s ease-in";
            tooltip.style.display = "block";

            
        });
        user.addEventListener("mouseleave", () =>
        {
            tooltip.style.animation = "Fadeout 0.5s ease-out";
            tooltip.style.display = "none";

        });
        
    }, []);

    return (
        <>

            <div className = "background" id = "background" style = {{backgroundImage: `url(${background})`}}>
                <div className = "ul" id = "table">
                    <li className = "ul li diamond1" onClick = {onclick1} style = {{display: (display1)}}><div className = "image" style = {{backgroundImage: `url(${image1})`}}><div className = "text">{text1}</div></div></li>
                    <li className = "ul li diamond2" onClick = {onclick2} style = {{display: (display2)}}><div className = "image" style = {{backgroundImage: `url(${image2})`}}><div className = "text">{text2}</div></div></li>
                    <li className = "ul li diamond3" onClick = {onclick3} style = {{display: (display3)}}><div className = "image" style = {{backgroundImage: `url(${image3})`}}><div className = "text">{text3}</div></div></li>
                    <li className = "ul li diamond4" onClick = {onclick4} style = {{display: (display4)}}><div className = "image" style = {{backgroundImage: `url(${image4})`}}><div className = "text">{text4}</div></div></li>
                    <li className = "ul li diamond5" onClick = {onclick5} style = {{display: (display5)}}><div className = "image" style = {{backgroundImage: `url(${image5})`}}><div className = "text">{text5}</div></div></li>
                    <li className = "ul li diamond6" onClick = {onclick6} style = {{display: (display6)}}><div className = "image" style = {{backgroundImage: `url(${image6})`}}><div className = "text">{text6}</div></div></li>
                    <li className = "ul li diamond7" onClick = {onclick7} style = {{display: (display7)}}><div className = "image" style = {{backgroundImage: `url(${image7})`}}><div className = "text">{text7}</div></div></li>
                    <li className = "ul li diamond8" onClick = {onclick8} style = {{display: (display8)}}><div className = "image" style = {{backgroundImage: `url(${image8})`}}><div className = "text">{text8}</div></div></li>
                    <li className = "ul li diamond9" onClick = {onclick9} style = {{display: (display9)}}><div className = "image" style = {{backgroundImage: `url(${image9})`}}><div className = "text">{text9}</div></div></li>
                    <li className = "ul li diamond10" style = {{display: (display10)}}><div className = "image"><div className = "text"></div></div></li>
                    <li className = "ul li diamond11" style = {{display: (display11)}}><div className = "image"><div className = "text"></div></div></li>
                    <li className = "ul li diamond12" style = {{display: (display12)}}><div className = "image"><div className = "text"></div></div></li>
                    <li className = "ul li diamond13" style = {{display: (display13)}}><div className = "image"><div className = "text"></div></div></li>
                    <li className = "ul li diamond14" style = {{display: (display14)}}><div className = "image"><div className = "text"></div></div></li>
                    <li className = "ul li diamond15" style = {{display: (display15)}}><div className = "image"><div className = "text"></div></div></li>
                    <li className = "ul li diamond16" style = {{display: (display16)}}><div className = "image"><div className = "text"></div></div></li>
                    <li className = "ul li diamond17" style = {{display: (display17)}}><div className = "image"><div className = "text"></div></div></li>
                </div>
            </div>
            <UserInformation Heading1 = "Username" Heading2 = "Password" Image = {image}/>
            <div className = "user-tooltip" id = "_tooltip">User Information</div>
        </>    
    );
}
// Setting default value for props


export default Background2;