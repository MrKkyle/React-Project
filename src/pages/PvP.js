import Background3 from "../components/Background3";

import {useEffect} from 'react';
import video from '../Images/Live-Wallpapers/angels-of-clemency-tower-of-fantasy.3840x2160.mp4';

function PVP()
{

    useEffect(()=> 
    {
        
    }, []);
    return (
    <>
        <Background3 Title = "PvP" text = {localStorage.getItem("PVP")}/>
        <video loop autoPlay muted className = "video">
            <source src = {video} type = "video/mp4"></source>
        </video>
    </>
    );
  
};
    
export default PVP;
