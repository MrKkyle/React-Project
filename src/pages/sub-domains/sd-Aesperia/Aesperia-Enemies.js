import Background3 from "../../../components/Background3";
import image from '../../../Images/enemies.jpg';

function Enemies()
{
  return (
  <>
    <Background3 Background = {image} Title = "Aesperia-Enemies" text = {localStorage.getItem("aesperia-enemies")}/>
  </>
  );
  
};
    
export default Enemies;