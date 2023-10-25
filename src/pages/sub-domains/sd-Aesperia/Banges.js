import Background3 from "../../../components/Background3";
import image from '../../../Images/Banges.png';

function ArtificialIsland()
{
  return (
  <>
    <Background3 Background = {image} Title = "Banges" text = {localStorage.getItem("banges")}/>
  </>
  );
  
};
    
export default ArtificialIsland;