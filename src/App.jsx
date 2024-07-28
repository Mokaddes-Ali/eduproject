import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Governance from './Pages/Governance';
import Administration from './Pages/Administration';
import IQAC from './Pages/IQAC';
import Academic from './Pages/Academic';
import Facilities from './Pages/Facilities';
import Admission from './Pages/Admission';
import Publications from './Pages/Publications';
import OnlineServices from './Pages/OnlineServices';

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/governance" element={<Governance />} />
                <Route path="/administration" element={<Administration />} />
                <Route path="/iqac" element={<IQAC />} />
                <Route path="/academic" element={<Academic />} />
                <Route path="/facilities" element={<Facilities />} />
                <Route path="/admission" element={<Admission />} />
                <Route path="/publications" element={<Publications />} />
                <Route path="/online-services" element={<OnlineServices />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
