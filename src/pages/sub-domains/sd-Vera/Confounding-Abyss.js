import Background3 from "../../../components/Background3";
import image from '../../../Images/confoundingAbyss.png';

function ConfoundingAbyss()
{
  return (
  <>
    <Background3 Background = {image} Title = "Confounding Abyss" text = {localStorage.getItem("confoundingAbyss")}/>
  </>
  );
  
};
    
export default ConfoundingAbyss;

/* Text = {`
    The Confounding Abyss is an area in Vera and is physically located beneath the Mirroria. The Confounding Abyss appears immediately when the construction team of the Third City lost 
    communication a few years ago. It affects the laws of physics surrounding it, emitting a sub-gravity field where the Mirroria's anti-gravity engines rely on this field to keep Mirroria afloat.
    `}*/