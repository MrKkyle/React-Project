import { Outlet, Link } from "react-router-dom";
import MyImage from '../Images/20200930_155017.jpg';

const Layout = () => {
  return (
    <>
      <nav className = "Navi">
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
        </ul>
      </nav>
      
      <Outlet />
    </>
  )
};

export default Layout