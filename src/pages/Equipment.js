import Background3 from "../components/Background3";
import $ from "jquery";
import {useEffect} from 'react';
import video from '../Images/Live-Wallpapers/ruby-in-tower-of-fantasy.3840x2160.mp4';

function Equipment()
{
    useEffect(()=> 
    {
        
    }, []);

    return (
    <>
        <Background3 Title = "Equipment" Text = {`
        Equipment are items that can be equipped to boost certain stats of the Wanderer. Equipment comes in all rarities.
        Each piece of Equipment can have 2 or 3 fixed base stats based on their type, and 2-4 random substats. 

        Every current piece of gear can have any substat, except for Crit, which can only appear as a substat on Gloves and Boots pieces.

        `}/>
        <video loop autoPlay muted className = "video">
            <source src = {video} type = "video/mp4"></source>
        </video>
    </>
    );
  
};
    
export default Equipment;