import Background3 from "../../../components/Background3";
import image from '../../../Images/enemies.jpg';
function Enemies()
{
  return (
  <>
    <Background3 Background = {image} Title = "Vera-Enemies" text = {localStorage.getItem("veraEnemies")}/>
  </>
  );
  
};
    
export default Enemies;
/*{`

    •Hyena Destroyers
    •Hyena Elites
    •Hyena Warriors
    •Hyena Wino
    •Hyena Scouts
    •Hyena Snipers
    •Hyena Thugs
    •Abyssant Weaver
    •Abyssant Stalker
    •Abyssant Devourer
    `}/>*/