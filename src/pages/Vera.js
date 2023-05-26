import veraEnemies from './sub-domains/sd-Vera/Vera-Enemies';
import veraWorldBossses from './sub-domains/sd-Vera/Vera-WorldBosses';
import graySpace from './sub-domains/sd-Vera/Grayspace';
import Mirroria from './sub-domains/sd-Vera/Mirroria';
import confoundingAbyss from './sub-domains/sd-Vera/Confounding-Abyss';
import innars from './sub-domains/sd-Vera/Innars';
import miasmicSwamp from './sub-domains/sd-Vera/Miasmic-Swamp';
import twilightZone from './sub-domains/sd-Vera/Twilight-Zone';
import Simulacra from './sub-domains/sd-Vera/Simulacra';
import {Routes, Route, useNavigate} from 'react-router-dom';

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
    <>
      <h1>Vera</h1>
      <button onClick = {navigateToSimulacra}>Simulacra</button>
      <br></br>
      <button onClick = {navigateToEnemies}>Enemies</button>
      <br></br>
      <button onClick = {navigateToWorldBosses}>WorldBosses</button>
      <br></br>
      <button onClick = {navigateToTwilightZone}>Twilight Zone</button>
      <br></br>
      <button onClick = {navigateToGraySpace}>GraySpace</button>
      <br></br>
      <button onClick = {navigateToMirroria}>Mirroria</button>
      <br></br>
      <button onClick = {navigateToConfoundingByss}>Confounding Abyss</button>
      <br></br>
      <button onClick = {navigateToMiasmicSwamp}>miasmic Swamp</button>
      <br></br>
      <button onClick = {navigateToInnars}>Innars</button>
    </>
    );

};
  
export default Vera;