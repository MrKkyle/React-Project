import Background3 from "../../../components/Background3";
import image from '../../../Images/Miasmic_Swamp.jpg';

function MiasmicSwamp()
{
  return (
  <>
    <Background3 Background = {image} Title = "Miasmic Swamp" text = {localStorage.getItem("miasmicSwamp")}/>
  </>
  );
  
};
    
export default MiasmicSwamp;

/*{`
    The Miasmic Swamp is an area in Vera. The Miasmic Swamp is a region flush with lush green landscapes and exotic flora. It is the only open world area with rain and 
    thunderstorm weathers in Vera. This is the conventional way of going to Innars through the Grandsea Tunnel before the connection of Spacerifts in between the cities.
    `}*/