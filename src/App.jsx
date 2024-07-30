import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Card from './Components/Card';
import Navbar from './Components/Navbar';

import { cardData } from './Components/Data/cardData';

import Home from './Pages/NavbarPage/Home';
import Governance from './Pages/NavbarPage/Governance';
import Administration from './Pages/NavbarPage/Administration';
import IQAC from './Pages/NavbarPage/IQAC';
import Academic from './Pages/NavbarPage/Academic';
import Facilities from './Pages/NavbarPage/Facilities';
import Admission from './Pages/NavbarPage/Admission';
import Publications from './Pages/NavbarPage/Publications';
import OnlineServices from './Pages/NavbarPage/OnlineServices';


import ViceChancellor from './Pages/AdministrationPage/ViceChancellor';
import ProViceChancellorAdmin from './Pages/AdministrationPage/ProViceChancellorAdmin';
import ProViceChancellorAcademic from './Pages/AdministrationPage/ProViceChancellorAcademic';
import Treasurer from './Pages/AdministrationPage/Treasurer';
import Registrar from './Pages/AdministrationPage/Registrar';
import Inspector from './Pages/AdministrationPage/Inspector';
import Proctor from './Pages/AdministrationPage/Proctor';
import StudentAdviser from './Pages/AdministrationPage/StudentAdviser';
import PublicRelations from './Pages/AdministrationPage/PublicRelations';

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                {/* Navbars Route Start */}
                <Route path="/" element={<Home />} />
                <Route path="/governance" element={<Governance />} />
                <Route path="/administration" element={<Administration />} />
                <Route path="/iqac" element={<IQAC />} />
                <Route path="/academic" element={<Academic />} />
                <Route path="/facilities" element={<Facilities />} />
                <Route path="/admission" element={<Admission />} />
                <Route path="/publications" element={<Publications />} />
                <Route path="/online-services" element={<OnlineServices />} />

                   {/* Navbars Route end */}

                      {/* Administration Route Start */}
          <Route path="/vice-chancellor" element={<ViceChancellor />} />
          <Route path="/pro-vice-chancellor-admin" element={<ProViceChancellorAdmin />} />
          <Route path="/pro-vice-chancellor-academic" element={<ProViceChancellorAcademic />} />
          <Route path="/treasurer" element={<Treasurer />} />
          <Route path="/registrar" element={<Registrar />} />
          <Route path="/inspector" element={<Inspector />} />
          <Route path="/proctor" element={<Proctor />} />
          <Route path="/student-adviser" element={<StudentAdviser />} />
          <Route path="/public-relations" element={<PublicRelations />} />

                      {/* Administration Route End */}
            </Routes>
            
        </BrowserRouter>
    );
};

export default App;
