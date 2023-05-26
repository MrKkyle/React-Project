import { Outlet, Link } from "react-router-dom";
import MyImage from '../Images/20200930_155017.jpg';

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/" id = "about">Home</Link>
          </li>
          <li>
            <Link to="/aesperia" id = "blog">Aesperia</Link>
          </li>
        
          <li>
            <img className = "avatar" src = {MyImage}></img>
          </li>
          <li>
            <Link to="/vera" id = "projects">Vera</Link>
          </li>
          <li>
            <Link to="/domain9" id = "contact">Domain 9</Link>
          </li>
        </ul>
      </nav>
      
      <Outlet />
    </>
  )
};

export default Layout