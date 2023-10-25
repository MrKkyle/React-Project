import Background3 from "../../../components/Background3";
import image from '../../../Images/innars.jpg';

function Innars()
{
  return (
  <>
    <Background3 Background = {image} Title = "Innars" text = {localStorage.getItem("innars")}/>
  </>
  );
  
};
    
export default Innars;