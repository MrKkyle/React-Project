import { Outlet, Link } from "react-router-dom";

const sdLayout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Aesperia</Link>
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
            <Link to="/domain9">Domain 9</Link>
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

export default sdLayout