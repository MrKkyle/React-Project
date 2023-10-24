import Background3 from "../components/Background3";
import $ from "jquery";
import {useEffect} from 'react';
import video from '../Images/Live-Wallpapers/ruby-in-tower-of-fantasy.3840x2160.mp4';

function PVP()
{

    useEffect(()=> 
    {
        
    }, []);
    return (
    <>
        <Background3 Title = "PvP" Text = {`
        Break from Destiny: 
        ____________________
        In Break from Destiny, players can participate in Break from Destiny seasons to compete 
        against up to 30 Wanderers 
        in a "battle royale" - like format, and the last remaining Wanderer will win the game. 

        Critical Abyss:
        _______________
        In The Critical Abyss, players can participate in Team 8v8s to obtain the 
        currency Critical Point, which can be 
        used to redeem items in the Points Store.

        Apex League:
        ____________
        In the Apex League,players can compete and fight against other player to rank up on 
        a server-wide leaderboard and acquire leaderboard rewards
        `}/>
        <video loop autoPlay muted className = "video">
            <source src = {video} type = "video/mp4"></source>
        </video>
    </>
    );
  
};
    
export default PVP;