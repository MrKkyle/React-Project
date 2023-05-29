import {useNavigate} from 'react-router-dom';
import '../Css/Background2.css';

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
    <div className = "background">
        <div className = "ul">
            <li className = "ul li diamond1" onClick = {navigateToSimulacra}><div className = "image"> Simulacra</div></li>
            <li className = "ul li diamond2" onClick = {navigateToEnemies}><div className = "image"> Enemies</div></li>
            <li className = "ul li diamond3" onClick = {navigateToWorldBosses}><div className = "image"> World Bosses</div></li>
            <li className = "ul li diamond4" onClick = {navigateToTwilightZone}><div className = "image"> Twilight Zone</div></li>
            <li className = "ul li diamond5" onClick = {navigateToGraySpace}><div className = "image"> GraySpace</div></li>
            <li className = "ul li diamond6" onClick = {navigateToMirroria}><div className = "image"> Mirroria</div></li>
            <li className = "ul li diamond7" onClick = {navigateToConfoundingByss}><div className = "image"> Confounding Abyss</div></li>
            <li className = "ul li diamond8" onClick = {navigateToMiasmicSwamp}><div className = "image"> Miasmic Swamp</div></li>
            <li className = "ul li diamond9" onClick = {navigateToInnars}><div className = "image"> Innars</div></li>
        </div>
    </div>
    );

};
  
export default Vera;