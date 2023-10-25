import Background3 from "../../../components/Background3";
import image from '../../../Images/worldboss.jpg';

function WorldBosses()
{
  return (
  <>
    <Background3 Background = {image} Title = "Aesperia World-Bosses" text = {localStorage.getItem("aesperia-wb")}/>
  </>
  );
  
};
    
export default WorldBosses;