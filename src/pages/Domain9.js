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
    <h1>Domain 9</h1>
    <button onClick = {navigateToSimulacra}>Simulacra</button>
    <br></br>
    <button onClick = {navigateToEnemies}>Enemies</button>
    <br></br>
    <button onClick = {navigateToWorldBosses}>World Bosses</button>
    <br></br>
    <button onClick = {navigateToUnknown}>Unknown</button>
    <br></br>
  </>
  );
  
};
    
export default Domain9;