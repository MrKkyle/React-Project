import Background3 from "../../../components/Background3";
import image from '../../../Images/Hykros.jpg';

function Hykros()
{
  return (
  <>
    <Background3 Background = {image} Title = "Hykros" text = {localStorage.getItem("hykros")}/>
  </>
  );
  
};
    
export default Hykros;