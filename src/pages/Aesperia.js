
import {useNavigate} from 'react-router-dom';
import Background2 from '../components/Background2';
import Image1 from '../Images/wr47krotuod91.png';
import Image2 from '../Images/wr47krotuod91.png';
import Image3 from '../Images/wr47krotuod91.png';
import Image5 from '../Images/wr47krotuod91.png';
import Image6 from '../Images/wr47krotuod91.png';

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
  
  return (
    <Background2 onclick1 = {navigateToSimulacra} image1 = {Image1} text1 = "Simulacra" display1 = "block"
                  onclick2 = {navigateToEnemies} image2 = {Image2} text2 = "Enemies" display2 = "block"
                  onclick3 = {navigateToWorldBosses} image3 = {Image3} text3 = "World-Bosses" display3 = "block"
                  onclick5 = {navigateToArtificialIsland} image5 = {Image5} text5 = "Artificial-Island" display5 = "block"
                  onclick6 = {navigateToHykros} image6 = {Image6} text6 = "Hykros" display6 = "block"
    />
  );
  
};

export default Aesperia;