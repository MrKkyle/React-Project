import {useNavigate} from 'react-router-dom';
import {useEffect} from 'react';
import Background2 from '../components/Background2';
import Text_container from '../components/Text-container';

import Image1 from '../Images/wr47krotuod91.png';
import Image2 from '../Images/au2gypfkx10a1.jpg';
import Image3 from '../Images/wr47krotuod91.png';
import Image4 from '../Images/au2gypfkx10a1.jpg';
import Image5 from '../Images/wr47krotuod91.png';
import Image_default from '../Images/778122.png';

function Aesperia()
{
  const navigate = useNavigate();
  const navigateToSimulacra = () => 
  {
    //navigate to /simulacra
    navigate('/Simulacra');
  };
  const navigateToEnemies = () => 
  {
    //navigate to /enemies
    navigate('/aesperiaEnemies');
  };
  const navigateToWorldBosses = () => 
  {
    //navigate to /worldbosses
    navigate('/aesperiaWorldBosses');
  };
  const navigateToArtificialIsland = () => 
  {
    //navigate to /artificialIsland
    navigate('/artificialIsland');
  };
  const navigateToHykros = () => 
  {
    //navigate to /Hykros
    navigate('/Hykros');
  };
  
  useEffect(()=> 
  {
    let text_container = document.getElementById("text-container");
    let background = document.getElementById("background");
    let diamonds = document.querySelectorAll(".ul.li");
    
    let array = [Image1, Image2, Image3, Image4, Image5];
    for(let i = 0; i < diamonds.length; i++)
    {
      let dia = diamonds[i];
      let arr = array[i];
      //Child element to identify if diamond is empty or not
      let child = dia.firstElementChild.firstElementChild;
      diamonds[i].onclick = function(event)
      {
        if(dia.onclick && child.innerHTML != "")
        {
          //Change background
          background.style.backgroundImage = `url(${arr})`;

          //text-container fades in
          text_container.style.display = "block";
          dia.ondblclick = function(event)
          {
            //if double-clicked on element, returns back to normal
            text_container.style.display = "none";
            background.style.backgroundImage = `url(${Image_default})`;
          }
        }

      }

      
    }
      //console.log(diamonds);
      //console.log(text_container);

    }, []);


  return (
    <div>
      <Background2   image1 = {Image1} text1 = "Simulacra" display1 = "block"
                     image2 = {Image2} text2 = "Enemies" display2 = "block"
                     image3 = {Image3} text3 = "World-Bosses" display3 = "block"
                     image4 = {Image4} text4 = "Artificial-Island" display4 = "block"
                     image5 = {Image5} text5 = "Hykros" display5 = "block"
      />
      <Text_container />
    </div>
  );
  
};

export default Aesperia;