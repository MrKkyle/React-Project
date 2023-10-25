import Background3 from "../../../components/Background3";
import image from '../../../Images/Mirroria.png';

function Mirroria()
{
  return (
  <>
    <Background3 Background = {image} Title = "Mirroria" text = {localStorage.getItem("mirroria")}/>
  </>
  );
  
};
    
export default Mirroria;