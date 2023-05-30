import {useNavigate} from 'react-router-dom';
import Background2 from '../components/Background2';
import Image1 from '../Images/wr47krotuod91.png';
import Image2 from '../Images/wr47krotuod91.png';
import Image3 from '../Images/wr47krotuod91.png';
import Image4 from '../Images/wr47krotuod91.png';

function Domain9()
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
    navigate('/domain9Enemies');
  };

  const navigateToWorldBosses = () => 
  {
    //navigate to /worldbosses
    navigate('/domain9WorldBosses');
  };

  const navigateToUnknown = () => 
  {
    //navigate to /unknown
    navigate('/domain9Unknown');
  };

  return (
    <Background2 onclick1 = {navigateToSimulacra} image1 = {Image1} text1 = "Simulacra" display1 = "block"
                onclick2 = {navigateToEnemies} image2 = {Image2} text2 = "Enemies" display2 = "block"
                onclick3 = {navigateToWorldBosses} image3 = {Image3} text3 = "World-Bosses" display3 = "block"
                onclick5 = {navigateToUnknown} image5 = {Image4} text5 = "Unknown" display5 = "block"
    />
  );
  
};
    
export default Domain9;