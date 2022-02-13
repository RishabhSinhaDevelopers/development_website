import React from 'react'
import App from './App';
import About from './pages/Aboutcompiler';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Competitions from './pages/Competitions';
import Work from './pages/Work';
import Challenges from './pages/Challenges';
import Team from './pages/Team';
import Blueocean from './pages/Blueocean';
import Conrad from './pages/Conrad';
import Cooperhewitt from './pages/Cooperhewitt';
import Diamond from './pages/Diamond';
import Gallery from './pages/Gallery';
import Nfte from './pages/Nfte';
import Paradigm from './pages/Paradigm';
import Pitchnj from './pages/Pitchnj';
import Technovation from './pages/Technovation';
import Resources from './pages/Resources';
const Apple = () => (
        <Router>
            <Routes>
            <Route path="/" element={<App />} />
            <Route path="/contact" element={<Competitions />} />
            <Route path="/about" element={<About />} />
            <Route path="/requirements" element={<Work />} />
            <Route path="/challenges" element={<Challenges />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/work" element={<Work />} />
            <Route path="/team" element={<Team />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/blueocean" element={<Blueocean />} />
            <Route path="/conrad" element={<Conrad />} />
            <Route path="/cooperhewitt" element={<Cooperhewitt />} />
            <Route path="/diamond" element={<Diamond />} />
            <Route path="/nfte" element={<Nfte />} />
            <Route path="/paradigm" element={<Paradigm />} />
            <Route path="/pitchnj" element={<Pitchnj />} />
            <Route path="/technovation" element={<Technovation />} />
            </Routes>
        </Router>        
    )


export default Apple


