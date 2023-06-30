import '../Css/Background.css';
import {useEffect} from 'react';

function Background3(props)
{

    useEffect(()=> 
    {
        let navbar = document.querySelector(".navbar");
        var txt = document.querySelector(".text-container").innerHTML;
        document.querySelector(".text-container").innerHTML = "";
        var speed = 28;
        var i = 0;
        function typeWriter() 
        {
            if (i < txt.length)
            {
                document.querySelector(".text-container").innerHTML += txt.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            }
        }
        
        navbar.onclick = function(event)
        {
            txt = ""
        }
        
        setTimeout(() =>
        {
            typeWriter();
        }, 2000);

        /* Removes any background color if there is no text */
        let diamond = document.querySelectorAll(".ul.li");
        for(let i = 0; i < diamond.length; i++)
        {
            if(diamond[i].firstChild.firstChild.innerHTML == "")
            {
                diamond[i].firstChild.firstChild.style.backgroundColor = "transparent";
            }
        }

    }, []);
    return (
    <>   
        <div className = "background-image" style = {{backgroundImage: `url(${props.Background})`}}>
            <div className = "container" id = "container">
                <div className = "text">
                    {props.Title}
                    <hr style = {{display: props.hr}}/>
                </div>
                <div className = "text-container">
                    {props.Text}
                </div>
            </div>
            <div className = "ul" id = "table" style = {{width: '1880px', height: '980px', overflow: 'hidden'}}>
                <li className = "ul li diamond1" style = {{display: 'block', left: '23%', top: '-7%', width: '600px', height: '600px'}}><div className = "image"><div className = "text"></div></div></li>
                <li className = "ul li diamond2" style = {{display: 'block', left: '50%', top: '46%', width: '600px', height: '600px'}}><div className = "image"><div className = "text"></div></div></li>
                <li className = "ul li diamond3" style = {{display: 'block', left: '77%', top: '-7%', width: '600px', height: '600px'}}><div className = "image"><div className = "text"></div></div></li>
                <li className = "ul li diamond4" style = {{display: 'block', left: '23%', top: '99%', width: '600px', height: '600px'}}><div className = "image"><div className = "text"></div></div></li>
                <li className = "ul li diamond5" style = {{display: 'block', left: '77%', top: '99%', width: '600px', height: '600px'}}><div className = "image"><div className = "text"></div></div></li>
                <li className = "ul li diamond6" style = {{display: 'block', left: '-4%', top: '46%', width: '600px', height: '600px'}}><div className = "image"><div className = "text"></div></div></li>
            </div>
        </div>
        
    </>     
    );
  
};
Background3.defaultProps = 
{
	Title: "Add a title here",
    Text: "Add some text here",
    Background: "",
    hr : "block"
}
export default Background3;