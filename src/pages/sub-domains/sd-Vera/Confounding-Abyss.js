import Background3 from "../../../components/Background3";
import image from '../../../Images/confoundingAbyss.png';

function ConfoundingAbyss()
{
  return (
  <>
    <Background3 Background = {image} Title = "Confounding Abyss" text = {localStorage.getItem("confounding-abyss")}/>
  </>
  );
  
};
    
export default ConfoundingAbyss;