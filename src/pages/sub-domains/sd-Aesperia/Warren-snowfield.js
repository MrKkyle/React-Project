import Background3 from "../../../components/Background3";
import image from '../../../Images/SnowField.png';

function ArtificialIsland()
{
  return (
  <>
    <Background3 Background = {image} Title = "Warren-Snowfield" text = {localStorage.getItem("warren-snowfield")}/>
  </>
  );
  
};
    
export default ArtificialIsland;