// Imports Below 
import Discord from '../Images/Socials/discord.png';
import Facebook from '../Images/Socials/facebook.png';
import Twitter from '../Images/Socials/twitter.png';
import Website from '../Images/Socials/web.png';

// Import Style sheet below
import '../Css/navigation-bar2.css';
function Navigation_Bar2()
{
    return (
        <div>
            <div id="mySidenav" className="sidenav">
                <a href = {Discord} id = "about">Discord</a>
                <a href = {Facebook} id = "blog">Facebook</a>
                <a href = {Twitter} id = "projects">Twitter</a>
                <a href = {Website} id = "contact">Website</a>
            </div>
        </div>
    );
}

export default Navigation_Bar2;