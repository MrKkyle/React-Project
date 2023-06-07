import '../Css/Slideshow.css';
import {useEffect} from 'react';
import Image1 from '../Images/629404.jpg';
import Image2 from '../Images/629408.jpg';
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


    
    return (
        <div>
            <div className = "slideshow-container">
                <div className = "mySlides fade">
                    <div className = "slide1">
                        <div className = "weapon" style = {{backgroundImage: `url(${Image1})`}}>
                            
                        </div>
                        <div className = "weapon-info">
                            <div className = "text">Weapon description goes here</div>
                        </div>
                    </div>

                    <div className = "slide2">
                        <div className = "character-pic" style = {{backgroundImage: `url(${Image2})`}}>
                            
                        </div>
                        <div className = "character-info">
                            <div className = "text">Character descrption goes here</div>
                        </div>
                    </div>
                </div>

                <div className = "mySlides fade">
                    <div className = "slide1">
                        <div className = "weapon" style = {{backgroundImage: `url(${Image1})`}}>
                            
                        </div>
                        <div className = "weapon-info">
                            <div className = "text">Weapon description goes here</div>
                        </div>
                    </div>
                    <div className = "slide2">
                        <div className = "character-pic" style = {{backgroundImage: `url(${Image2})`}}>
                            
                        </div>
                        <div className = "character-info">
                            <div className = "text">Character descrption goes here</div>
                        </div>
                    </div>
                </div>
                
            </div>

            <a id = "prev" className = "prev" >&#10094;</a>
	        <a id = "next" className = "next" >&#10095;</a>
        </div>
    );
}


export default Slideshow;


