import {useEffect} from 'react';
import '../Css/Auto-slideshow.css';
import image1 from '../Images/ToF_Wallpaper2022_09.png';
import image2 from '../Images/ToF_Wallpaper2022_07.png';
import image3 from '../Images/ToF_Wallpaper2022_10.png';

function Auto_Slideshow(props)
{
    useEffect(()=> 
    {
        let slideIndex = 0;
        showSlides();
        
        function showSlides() 
        {
          let i;
          let slides = document.getElementsByClassName("mySlides");
          for (i = 0; i < slides.length; i++) 
          {
            slides[i].style.display = "none";  
          }
          slideIndex++;
          if (slideIndex > slides.length) {slideIndex = 1}    
          slides[slideIndex-1].style.display = "block";  
          setTimeout(() =>
            {
                showSlides();
            }, 2000); // Change image every 2 seconds
        }
    }, []);

    return (
    <>
        <div className = "auto-slideshow-container">

            <div className = "mySlides fade">
                <img src = {image1} style = {{width: '100%'}}></img>
                <div className = "text">{props.text1}</div>
            </div>

            <div className = "mySlides fade">
                <img src = {image2} style = {{width: '100%'}}></img>
                <div className = "text">{props.text2}</div>
            </div>

            <div className = "mySlides fade">
                <img src = {image3} style = {{width: '100%'}}></img>
                <div className = "text">{props.text3}</div>
            </div>

        </div>
    </>
    );
  
};

Auto_Slideshow.defaultProps = 
{ 
    text1: "Add text here", 
    text2: "Add text here", 
    text3: "Add text here"
}
export default Auto_Slideshow;