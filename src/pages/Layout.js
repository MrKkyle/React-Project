import { Outlet, Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import '../Css/navigation-bar.css'
import MyImage from '../Images/20200930_155017.jpg';

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

  return (
    <>
      <div className = "navbar">

        <Link className = "home" to="/">Home</Link>

        <div className = "dropdown">
          <button onClick = {navigateToAesperia} className = "dropbtn">Aesperia</button>
          <div className = "dropdown-content">
            <Link to="/aesperiaSimulacra">Simulacra</Link>
            <Link to="/aesperiaEnemies">Enemies</Link>
            <Link to="/aesperiaWorldBosses">WorldBosses</Link>
            <Link to="/ArtificialIsland">Artificial Island</Link>
            <Link to="/Hykros">Hykros</Link>
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

        <div className = "avatar">
          <img className = "avatar" src = {MyImage} />
        </div>
      </div>
      
      <Outlet />
    </>
  )
};

/*
<nav className = "Navi" id = "navi">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/aesperia">Aesperia</Link>
          </li>
          <li>
            <img className = "avatar" src = {MyImage}></img>
          </li>
          <li>
            <Link to="/vera">Vera</Link>
          </li>
          <li>
            <Link to="/domain9">Domain 9</Link>
          </li>
          <div className = "dropdown">
            <button className = "dropbtn">Dropdown<i className = "fa fa-caret-down"></i></button>
            <div className = "dropdown-content">
              <a href = "#">Link 1</a>
              <a href = "#">Link 1</a>
            </div>
            
          </div>
        </ul>
      </nav>
*/
export default Layout