import Background3 from "../../../components/Background3";
import image from '../../../Images/enemies.jpg';

function Enemies()
{
  return (
  <>
    <Background3 Background = {image} Title = "Aesperia-Enemies" text = {localStorage.getItem("aesperiaEnemies")}/>
  </>
  );
  
};
    
export default Enemies;

/*{`
    Enemies  are hostile creatures in Tower of Fantasy that can be defeated by players. There are several different 
    types of enemies classified by overall ascending difficulty: Lesser Enemies, Elite Enemies, Boss Enemies and World Bosses.
    Side note: Lesser and Elite enemies can take fall damage.
    
    Lesser Enemies are the most common type of enemy which can be easily found across the world. They include:
    •Bears
    •Beaters
    •Wild Boars
    •Bunnydarts 
    •Densyas
    •Elemental Cores 
    •Headhunter Elites 
    •Head Hunters 
    •Hyena Destroyers 
    •Hyena Elites 
    •Hyena Warriors 
    •Ravager Assaulters 
    •Ravager Assaulter Elites
    •Ravager Flyers
    •Razor Elites 
    •Watchers
    `}*/