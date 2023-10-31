import Background3 from "../components/Background3";
import {useEffect} from 'react';
import video from '../Images/Live-Wallpapers/LiveWallpaperPC.com-Tower-Of-Fantasy-3840x2160.mp4';

function Equipment(props)
{
    useEffect(() =>
    {
        /*
        $.post( "http://localhost:8000/session_variables.php", {action: "equipment"})
        .done(function( _data) 
        {
            console.log("Login: " + _data);
        });
        */

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