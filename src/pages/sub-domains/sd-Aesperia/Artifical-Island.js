import Background3 from "../../../components/Background3";
import image from '../../../Images/Artificial-Island.jpg';

function ArtificialIsland()
{
  return (
  <>
    <Background3 Background = {image} Title = "Artificial-Island" text = {localStorage.getItem("ArtificialIsland")}/>
  </>
  );
  
};
    
export default ArtificialIsland;

/* Text = {`
    The Artificial Island is an area in Aesperia and was a project started by Banges Tech under the direction of Kolador 
    so that it could be a new place for everyone to live in, however due to the Heirs of Aida attacking Banges Tech, 
    the project was stalled. Following the reconstruction of Banges Tech, the Artificial Island project was resumed, 
    however the island is now inhabited by many hostile groups, such as the Hyenas.
  `}*/