import Background3 from "../../../components/Background3";
import image from '../../../Images/Mirroria.png';

function Mirroria()
{
  return (
  <>
    <Background3 Background = {image} Title = "Mirroria" text = {localStorage.getItem("Mirroria")}/>
  </>
  );
  
};
    
export default Mirroria;
/* Text = {`
    Mirroria is an area in Vera. Mirroria was originally the base of Hykros District 7, where Mirroria's main buildings were constructed in 2657. Mirroria contains several 
    working districts, including residential, science and research, industrial, and storage, but most internal infrastructures were not fully completed as of 2664. In the 
    post-Cataclysm era, Mirroria had become a shelter for the remaining survivors in Vera. After the Cataclysm, Mirroria accepted about 90,000 survivors from Vera. In the next few 
    decades, Mirroria had undergone several reconstructions and expansions, and the current population of Mirroria numbered 57,000.`}
    */