import Background3 from "../components/Background3";
import {useEffect} from 'react';
import video from '../Images/Live-Wallpapers/ruby-in-tower-of-fantasy.3840x2160.mp4';

function PVP()
{

    return (
    <>
        <Background3 Title = "PvP" text = {localStorage.getItem("pvp")}/>
        <video loop autoPlay muted className = "video">
            <source src = {video} type = "video/mp4"></source>
        </video>
    </>
    );
  
};
    
export default PVP;