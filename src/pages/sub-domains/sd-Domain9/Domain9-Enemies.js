import Background3 from "../../../components/Background3";
import image from '../../../Images/domain9.png';
function Enemies()
{
  return (
  <>
    <Background3 Background = {image} Title = "Domain 9 Enemies" text = {localStorage.getItem("d9-enemies")} />
  </>
  );
  
};
    
export default Enemies;