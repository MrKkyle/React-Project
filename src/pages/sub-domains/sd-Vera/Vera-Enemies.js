import Background3 from "../../../components/Background3";
import image from '../../../Images/enemies.jpg';
function Enemies()
{
  return (
  <>
    <Background3 Background = {image} Title = "Vera-Enemies" text = {localStorage.getItem("vera-enemies")}/>
  </>
  );
  
};
    
export default Enemies;