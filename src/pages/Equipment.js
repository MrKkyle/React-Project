import Background3 from "../components/Background3";
import image from '../Images/ToF_Wallpaper2022_01.png';

function Equipment()
{
  return (
  <>
    <Background3 Background = {image} Title = "Equipment" Text = {`
    Each piece of Equipment can have 2 or 3 fixed Base Stats based on their type, and 
    2-4 random substats. Every current piece of gear can have any substat, except for 
    Crit, which can only appear as a substat on Gloves and Boots pieces.
    `}/>
  </>
  );
  
};
    
export default Equipment;