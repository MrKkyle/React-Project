import {useNavigate} from 'react-router-dom';
import Background2 from '../components/Background2';
import Image1 from '../Images/wr47krotuod91.png';
import Image2 from '../Images/wr47krotuod91.png';
import Image3 from '../Images/wr47krotuod91.png';
import Image4 from '../Images/wr47krotuod91.png';
import Image5 from '../Images/wr47krotuod91.png';
import Image6 from '../Images/wr47krotuod91.png';
import Image7 from '../Images/wr47krotuod91.png';
import Image8 from '../Images/wr47krotuod91.png';
import Image9 from '../Images/wr47krotuod91.png';

function Vera()
{
    const navigate = useNavigate();

    const navigateToSimulacra = () => 
    {
      navigate('/Simulacra');
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
      <Background2 onclick1 = {navigateToSimulacra} image1 = {Image1} text1 = "Simulacra" display1 = "block"
      onclick2 = {navigateToEnemies} image2 = {Image2} text2 = "Enemies" display2 = "block"
      onclick3 = {navigateToWorldBosses} image3 = {Image3} text3 = "World-Bosses" display3 = "block"
      onclick4 = {navigateToTwilightZone} image4 = {Image4} text4 = "Twilight Zone" display4 = "block"
      onclick5 = {navigateToGraySpace} image5 = {Image5} text5 = "GraySpace" display5 = "block"
      onclick6 = {navigateToMirroria} image6 = {Image6} text6 = "Mirroria" display6 = "block"
      onclick7 = {navigateToMiasmicSwamp} image7 = {Image7} text7 = "Miasmic Swamp" display7 = "block"
      onclick8 = {navigateToConfoundingByss} image8 = {Image8} text8 = "Confounding Abyss" display8 = "block"
      onclick9 = {navigateToInnars} image9 = {Image9} text9 = "Innars" display9 = "block"

/>
    );

};
  
export default Vera;