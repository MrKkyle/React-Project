import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Aesperia from './pages/Aesperia';
import Vera from './pages/Vera';
import Domain9 from './pages/Domain9';
import NoPage from './pages/NoPage';

import aesperiaEnemies from './pages/sub-domains/sd-Aesperia/Aesperia-Enemies';
import aesperiaWorldBosses from './pages/sub-domains/sd-Aesperia/Aesperia-WorldBosses';
import artificialIsland from './pages/sub-domains/sd-Aesperia/Artifical-Island';
import hykros from './pages/sub-domains/sd-Aesperia/Hykros';

import domain9Enemies from './pages/sub-domains/sd-Domain9/Domain9-Enemies';
import domain9WorldBosses from './pages/sub-domains/sd-Domain9/Domain9-WorldBosses';
import domain9Unknown from './pages/sub-domains/sd-Domain9/Unknown';

import veraEnemies from './pages/sub-domains/sd-Vera/Vera-Enemies';
import veraWorldBossses from './pages/sub-domains/sd-Vera/Vera-WorldBosses';
import graySpace from './pages/sub-domains/sd-Vera/Grayspace';
import Mirroria from './pages/sub-domains/sd-Vera/Mirroria';
import confoundingAbyss from './pages/sub-domains/sd-Vera/Confounding-Abyss';
import innars from './pages/sub-domains/sd-Vera/Innars';
import miasmicSwamp from './pages/sub-domains/sd-Vera/Miasmic-Swamp';
import twilightZone from './pages/sub-domains/sd-Vera/Twilight-Zone';

import '../src/Css/main.css';

export default function Main()
{
    return ( 
        <div>
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

                <Routes>
                    <Route path = "/aesperia" element = {<Layout />}>
                        <Route index element = {<Aesperia />}></Route>
                        <Route path = "artificialIsland" element = {<artificialIsland />}></Route>
                        <Route path = "hykros" element = {<hykros />}></Route>
                        <Route path = "aesperiaEnemies" element = {<aesperiaEnemies />}></Route>
                        <Route path = "aesperiaWorldBosses" element = {<aesperiaWorldBosses />}></Route>
                        <Route path = "*" element = {<NoPage />}></Route>
                    </Route>
                </Routes>

                <Routes>
                    <Route path = "/domain9" element = {<Layout />}>
                        <Route index element = {<Domain9 />}></Route>
                        <Route path = "domain9Unknown" element = {<domain9Unknown />}></Route>
                        <Route path = "domain9Eenemies" element = {<domain9Enemies />}></Route>
                        <Route path = "domain9WorldBossses" element = {<domain9WorldBosses />}></Route>
                        <Route path = "*" element = {<NoPage />}></Route>
                    </Route>
                </Routes>

                <Routes>
                    <Route path = "/vera" element = {<Layout />}>
                        <Route index element = {<Vera />}></Route>
                        <Route path = "grayspace" element = {<graySpace />}></Route>
                        <Route path = "twilightZone" element = {<twilightZone />}></Route>
                        <Route path = "mirroria" element = {<Mirroria />}></Route>
                        <Route path = "confoundingAbyss" element = {<confoundingAbyss />}></Route>
                        <Route path = "miasmicSwamp" element = {<miasmicSwamp />}></Route>
                        <Route path = "innars" element = {<innars />}></Route>
                        <Route path = "veraEnemies" element = {<veraEnemies />}></Route>
                        <Route path = "veraWorldBosses" element = {<veraWorldBossses />}></Route>
                    </Route>
                </Routes>

            </BrowserRouter>

        </div>
    );
}

/* ReactDOM enables us to render this element inside the real DOM*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);