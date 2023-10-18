import { Outlet, Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import {useEffect} from 'react';
import '../Css/navigation-bar.css'
import userImage from '../Images/Screenshot 2023-08-31 144726.png';

const Layout = () => {

    const navigate = useNavigate();

    const navigateToAesperia = () => 
    {
        navigate('/aesperia');
    };
    const navigateToVera = () => 
    {
        navigate('/vera');
    };
    const navigateToDomain9 = () => 
    {
        navigate('/domain9');
    };
    const navigateToPVP = () => 
    {
        navigate('/PVP');
    };
    const navigateToEquipment = () => 
    {
        navigate('/equipment');
    };

    useEffect(()=> 
    {
        let tooltip = document.getElementById("_tooltip");
        let user = document.getElementById("user");

        user.addEventListener("mouseenter", () =>
        {
            tooltip.style.animation = "FadeIn 0.5s ease-in";
            tooltip.style.display = "block";

            
        });
        user.addEventListener("mouseleave", () =>
        {
            tooltip.style.animation = "Fadeout 0.5s ease-out";
            tooltip.style.display = "none";

        });

    }, []);

    return (
        <>
        <div className = "navbar" id = "navigation">

            <Link id = "home" className = "home" to="/">Home</Link>

            <div className = "dropdown">
                <button onClick = {navigateToAesperia} className = "dropbtn">Aesperia</button>
                <div className = "dropdown-content">
                    <Link to="/aesperiaSimulacra">Simulacra</Link>
                    <Link to="/aesperiaEnemies">Enemies</Link>
                    <Link to="/aesperiaWorldBosses">WorldBosses</Link>
                    <Link to="/ArtificialIsland">Artificial Island</Link>
                    <Link to="/Hykros">Hykros</Link>
                    <Link to="/Banges">Banges</Link>
                    <Link to="/Warren">Warren</Link>
                </div>
            </div>

            <div className = "dropdown">
                <button onClick = {navigateToVera} className = "dropbtn">Vera</button>
                <div className = "dropdown-content">
                    <Link to="/veraSimulacra">Simulacra</Link>
                    <Link to="/veraEnemies">Enemies</Link>
                    <Link to="/veraWorldBosses">World Bosses</Link>
                    <Link to="/graySpace">GraySpace</Link>
                    <Link to="/twilightZone">Twilight Zone</Link>
                    <Link to="/Mirroria">Mirroria</Link>
                    <Link to="/miasmicSwamp">Miasmic Swamp</Link>
                    <Link to="/confoundingAbyss">Confounding Abyss</Link>
                    <Link to="/innars">Innars</Link>
                </div>
            </div>

            <div className = "dropdown">
                <button onClick = {navigateToDomain9} className = "dropbtn">Domain 9</button>
                <div className = "dropdown-content">
                    <Link to="/domain9Enemies">Enemies</Link>
                    <Link to="/domain9WorldBosses">World Bosses</Link>
                    <Link to="/unknown">Unknown</Link>
                </div>
            </div>

            <div className = "dropdown">
                <button onClick = {navigateToEquipment} className = "dropbtn">Equipment</button>
            </div>

            <div className = "dropdown">
                <button onClick = {navigateToPVP} className = "dropbtn">PvP</button>
            </div>

            <div className = "logout">
                <button id = "logout" className = "dropbtn">Logout</button>
            </div>

            <div className = "avatar" id = "user">
                <img className = "avatar" src = {userImage} />
            </div>
            <div className = "user-tooltip" id = "_tooltip">User Information</div>
            
        </div>
        
        <Outlet />
        </>
    )
};
export default Layout