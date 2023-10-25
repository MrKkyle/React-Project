import Background3 from "../../../components/Background3";
import image from '../../../Images/Miasmic_Swamp.jpg';

function MiasmicSwamp()
{
  return (
  <>
    <Background3 Background = {image} Title = "Miasmic Swamp" text = {localStorage.getItem("miasmic-swamp")}/>
  </>
  );
  
};
    
export default MiasmicSwamp;