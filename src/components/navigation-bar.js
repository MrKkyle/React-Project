// Imports Below 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../pages/Layout';
import Home from '../pages/Home';
import Aesperia from '../pages/Aesperia';
import Vera from '../pages/Vera';
import Domain9 from '../pages/Domain9';
import NoPage from '../pages/NoPage';

// Import Style sheet below
import '../Css/navigation-bar.css';
function Navigation_Bar()
{
    return (
        <div id = "navigation">
            <BrowserRouter>
                <Routes>
                    <Route path = "/" element = {<Layout />}>
                        <Route index element = {<Home />}></Route>
                        <Route path = "aesperia" element = {<Aesperia />}></Route>
                        <Route path = "vera" element = {<Vera />}></Route>
                        <Route path = "domain9" element = {<Domain9 />}></Route>
                        <Route path = "*" element = {<NoPage />}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default Navigation_Bar;
