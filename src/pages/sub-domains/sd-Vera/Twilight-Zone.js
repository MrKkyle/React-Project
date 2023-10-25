import Background3 from "../../../components/Background3";
import image from '../../../Images/Twilight_Zone.png';

function TwilightZone()
{
  return (
  <>
    <Background3 Background = {image} Title = "Twilight-Zone" text = {localStorage.getItem("twilight-zone")}/>
  </>
  );
  
};
    
export default TwilightZone;