import Background3 from "../../../components/Background3";
import image from '../../../Images/Hykros.jpg';

function Hykros()
{
  return (
  <>
    <Background3 Background = {image} Title = "Hykros" text = {localStorage.getItem("Hykros")}/>
  </>
  );
  
};
    
export default Hykros;

/* Text = {`
    Hykros is a faction that primarily operates in Aesperia. They are a scientific research and administration 
    institution located on the top floor of the Aesperia Tower of Fantasy. Hykros researches and continues to 
    pursue the applications and use of Omnium as they believe that for the sake and future of all Aidans, Omnium 
    can one day be controlled to serve the people.

    Following the Cataclysm and its disastrous aftereffects, Hykros began prioritizing research and development 
    on Suppressors, which would be used to resist the severe radioactive fallout that plagued the planet.
    `}*/