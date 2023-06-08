import '../Css/Slideshow.css';
import {useEffect} from 'react';
import Image1 from '../Images/629404.jpg';
import Image2 from '../Images/629408.jpg';
import Image3 from '../Images/629404.jpg';
import Image4 from '../Images/629408.jpg';
import Image5 from '../Images/629404.jpg';


function Slideshow(props) 
{
    useEffect(()=> 
    {
        let prev = document.getElementById("prev");
        let next = document.getElementById("next");
        let slideIndex = 1;
        showSlides(slideIndex);
        function plusSlides(n) 
        {
            showSlides(slideIndex += n);
        }
        function showSlides(n) 
        {
            let i;
            let slides = document.getElementsByClassName("mySlides");
            if (n > slides.length) {slideIndex = 1}    
            if (n < 1) {slideIndex = slides.length}
            for (i = 0; i < slides.length; i++) 
            {
                slides[i].style.display = "none";  
            }
            slides[slideIndex-1].style.display = "block"; 
        }

        //Scripts for the prev, next buttons to reset all the divs
        prev.onclick = function(event)
        {
            plusSlides(-1);
        }
        next.onclick = function(event)
        {
            plusSlides(1);
        }
    }, []);
    /* Slideshow information below*/
    const information = 
    [   
        {id: 1, weapon_description: "Learn React1", weapon_img: Image1, character_description: "completed1", character_img: Image1 },
        {id: 2, weapon_description: "Learn React2", weapon_img: Image2, character_description: "completed2", character_img: Image2 },
        {id: 3, weapon_description: "Learn React3", weapon_img: Image3, character_description: "completed3", character_img: Image3 },
        {id: 4, weapon_description: "Learn React3", weapon_img: Image3, character_description: "completed3", character_img: Image3 },
        {id: 5, weapon_description: "Learn React3", weapon_img: Image3, character_description: "completed3", character_img: Image3 },
        {id: 6, weapon_description: "Learn React3", weapon_img: Image3, character_description: "completed3", character_img: Image3 },
        {id: 7, weapon_description: "Learn React3", weapon_img: Image3, character_description: "completed3", character_img: Image3 },
        {id: 8, weapon_description: "Learn React3", weapon_img: Image3, character_description: "completed3", character_img: Image3 },
        {id: 9, weapon_description: "Learn React3", weapon_img: Image3, character_description: "completed3", character_img: Image3 },
        {id: 10, weapon_description: "Learn React3", weapon_img: Image3, character_description: "completed3", character_img: Image3 },
        {id: 11, weapon_description: "Learn React3", weapon_img: Image3, character_description: "completed3", character_img: Image3 },
        {id: 12, weapon_description: "Learn React3", weapon_img: Image3, character_description: "completed3", character_img: Image3 },
    ];
    
    return (
        <div className = "slideshow-container">
            {information.map((info) => 
            (
                <div key = {info.id} className = "mySlides fade">
                    <div className = "slide1">
                        <div className = "weapon" style = {{backgroundImage: `url(${info.weapon_img})`}}></div>
                        <div className = "weapon-info"><div className = "text">{info.weapon_description}</div></div>
                    </div>
                    <div className = "slide2">
                        <div className = "character-pic" style = {{backgroundImage: `url(${info.character_img})`}}></div>
                        <div className = "character-info"><div className = "text">{info.character_description}</div></div>
                    </div>
                </div>
            ))}

            <a id = "prev" className = "prev" >&#10094;</a>
	        <a id = "next" className = "next" >&#10095;</a>
        </div>
    );
}


export default Slideshow;


