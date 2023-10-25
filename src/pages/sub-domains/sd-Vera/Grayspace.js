import Background3 from "../../../components/Background3";
import image from '../../../Images/Grayspace.png';

function GraySpace()
{
  return (
  <>
    <Background3 Background = {image} Title = "Grayspace" text = {localStorage.getItem("graySpace")}/>
  </>
  );
  
};
    
export default GraySpace;

/* Text = {`
    The Grayspace is a plane of existence in Tower of Fantasy. It is a bleak, alternate version of the Vera region, similar to the Twilight Zone plane. The Grayspace area is home to many 
    Grayspace Entities large and small, and can be an especially dangerous place for inexperienced Wanderers. 
    In gameplay, the Grayspace can be accessed by interacting with Grayspace Fissures when the Wanderer is at Level 74, which will transport them to the Grayspace area, respective of their current location. 6 Grayspace Fissures will appear in different locations in the Vera region every day
    `}*/