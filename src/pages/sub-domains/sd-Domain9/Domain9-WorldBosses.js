import Background3 from "../../../components/Background3";
import image from '../../../Images/domain9.png';

function WorldBosses()
{
  return (
  <>
    <Background3 Background = {image} Title = "Domain 9 World-Bosses" text = {localStorage.getItem("domain9WorldBosses")} />
  </>
  );
  
};
    
export default WorldBosses;