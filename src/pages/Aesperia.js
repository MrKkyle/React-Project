
import {useNavigate} from 'react-router-dom';
import '../Css/Background2.css';

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
    <div className = "background">
      <div className = "ul">
          <li className = "ul li diamond1" onClick = {navigateToSimulacra}><div className = "image"> Simulacra</div></li>
          <li className = "ul li diamond2" onClick = {navigateToEnemies}><div className = "image"> Enemies</div></li>
          <li className = "ul li diamond3" onClick = {navigateToWorldBosses}><div className = "image"> World Bosses</div></li>
          <li className = "ul li diamond6" onClick = {navigateToArtificialIsland}><div className = "image"> Artificial Island</div></li>
          <li className = "ul li diamond5" onClick = {navigateToHykros}><div className = "image"> Hykros</div></li>
      </div>
    </div>
  );
  
};

export default Aesperia;