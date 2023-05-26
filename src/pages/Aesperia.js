import aesperiaEnemies from './sub-domains/sd-Aesperia/Aesperia-Enemies';
import aesperiaWorldBosses from './sub-domains/sd-Aesperia/Aesperia-WorldBosses';
import artificialIsland from './sub-domains/sd-Aesperia/Artifical-Island';
import hykros from './sub-domains/sd-Aesperia/Hykros';
import Simulacra from './sub-domains/sd-Aesperia/Simulacra';
import {Routes, Route, useNavigate} from 'react-router-dom';


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
  <>
    <h1>Aesperia</h1>
    <>
      <button className = "button3" onClick = {navigateToSimulacra}>Simulacra</button>
      <br></br>
      <button onClick = {navigateToEnemies}>Enemies</button>
      <br></br>
      <button onClick = {navigateToWorldBosses}>World Bosses</button>
      <br></br>
      <button onClick = {navigateToArtificialIsland}>Artificial Island</button>
      <br></br>
      <button onClick = {navigateToHykros}>Hykros</button>
    </>
  </>
  );
  
};

export default Aesperia;