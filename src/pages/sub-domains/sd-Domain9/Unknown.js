import Background3 from "../../../components/Background3";
import image from '../../../Images/domain9.png';

function Unknown()
{
  return (
  <>
    <Background3 Background = {image} Title = "Unknown" text = {localStorage.getItem("d9-unknown")}/>
  </>
  );
  
};
    
export default Unknown;