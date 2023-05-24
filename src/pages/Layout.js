import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/aesperia">Aesperia</Link>
          </li>
          <li>
            <Link to="/vera">Vera</Link>
          </li>
          <li>
            <Link to="/domain9">Domain 9</Link>
          </li>
          <li>
            <Link to="/worldbosses">WorldBosses</Link>
          </li>
          <li>
            <Link to="/enemies">Enemies</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout