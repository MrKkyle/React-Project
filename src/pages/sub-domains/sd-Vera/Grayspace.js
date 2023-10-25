import Background3 from "../../../components/Background3";
import image from '../../../Images/Grayspace.png';

function GraySpace()
{
  return (
  <>
    <Background3 Background = {image} Title = "Grayspace" text = {localStorage.getItem("grayspace")}/>
  </>
  );
  
};
    
export default GraySpace;