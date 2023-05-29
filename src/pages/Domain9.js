import domain9Enemies from './sub-domains/sd-Domain9/Domain9-Enemies';
import domain9WorldBosses from './sub-domains/sd-Domain9/Domain9-WorldBosses';
import domain9Unknown from './sub-domains/sd-Domain9/Unknown';
import Simulacra from './sub-domains/sd-Domain9/Simulacra';
import {Routes, Route, useNavigate} from 'react-router-dom';

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
  <>
    <div className = "background">
      <div className = "ul">
          <li className = "ul li diamond1" onClick = {navigateToSimulacra}><div className = "image"> Simulacra</div></li>
          <li className = "ul li diamond2" onClick = {navigateToEnemies}><div className = "image"> Enemies</div></li>
          <li className = "ul li diamond3" onClick = {navigateToWorldBosses}><div className = "image"> World Bosses</div></li>
          <li className = "ul li diamond5" onClick = {navigateToUnknown}><div className = "image"> Artificial Island</div></li>

      </div>
    </div>
  </>
  );
  
};
    
export default Domain9;