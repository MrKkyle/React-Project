import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Aesperia from './pages/Aesperia';
import Vera from './pages/Vera';
import Domain9 from './pages/Domain9';
import WorldBosses from './pages/WorldBosses';
import Enemies from './pages/Enemies';
import NoPage from './pages/NoPage';
import '../src/Css/JPN.css';

export default function JPN()
{
    return ( 
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path = "/" element = {<Layout />}>
                        <Route index element = {<Home />}></Route>
                        <Route path = "Aesperia" element = {<Aesperia />}></Route>
                        <Route path = "vera" element = {<Vera />}></Route>
                        <Route path = "worldbosses" element = {<WorldBosses />}></Route>
                        <Route path = "domain9" element = {<Domain9 />}></Route>
                        <Route path = "enemies" element = {<Enemies />}></Route>
                        <Route path = "*" element = {<NoPage />}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>

        </div>
    );
}

/* ReactDOM enables us to render this element inside the real DOM*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<JPN />);