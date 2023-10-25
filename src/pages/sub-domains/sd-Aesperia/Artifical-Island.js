import Background3 from "../../../components/Background3";
import image from '../../../Images/Artificial-Island.jpg';

function ArtificialIsland()
{
  return (
  <>
    <Background3 Background = {image} Title = "Artificial-Island" text = {localStorage.getItem("artificial-island")}/>
  </>
  );
  
};
    
export default ArtificialIsland;