import Background3 from "../components/Background3";
import {useEffect} from 'react';

import video from '../Images/Live-Wallpapers/LiveWallpaperPC.com-Tower-Of-Fantasy-3840x2160.mp4';

function Equipment()
{
    useEffect(() =>
    {
        

    }, []);

    return (
    <>
        <Background3 Title = "Equipment" text = {localStorage.getItem("equipment")}/>
        <video loop autoPlay muted className = "video">
            <source src = {video} type = "video/mp4"></source>
        </video>
        
    </>
    );
  
};
    
export default Equipment;