import Background3 from "../components/Background3";
import image from '../Images/2.jpg';

function PVP()
{
  return (
  <>
    <Background3 Background = {image} Title = "PvP" Text = {`
    Break from Destiny: 
    ____________________
    In Break from Destiny, players can participate in Break from Destiny seasons to compete against up to 30 Wanderers 
    in a "battle royale" - like format, and the last remaining Wanderer will win the game. 

    Critical Abyss:
    _______________
    In The Critical Abyss, players can participate in Team 8v8s to obtain the currency Critical Point, which can be 
    used to redeem items in the Points Store.

    Apex League:
    ____________
    In the Apex League,players can compete and fight against other player to rank up on a server-wide leaderboard 
    and acquire leaderboard rewards
    `}/>
  </>
  );
  
};
    
export default PVP;