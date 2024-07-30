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
import ExamController from './Pages/AdministrationPage/ExamController';
import OtherOffices from './Pages/AdministrationPage/OtherOffices';


import Webmail from './Pages/OnlineServicesPage/Webmail';
import InformationUpdate from './Pages/OnlineServicesPage/InformationUpdate';
import AnnualReport from './Pages/OnlineServicesPage/AnnualReport';
import Certificate from './Pages/OnlineServicesPage/Certificate';
import FormFill from './Pages/OnlineServicesPage/FormFill';
import RegistrationForm from './Pages/OnlineServicesPage/RegistrationForm';
import InternetRegistrationCancellation from './Pages/OnlineServicesPage/InternetRegistrationCancellation';
import StudentFeedbackSystem from './Pages/OnlineServicesPage/StudentFeedbackSystem';


import Faculty from './Pages/AcademicPage/Faculty';
import Institute from './Pages/AcademicPage/Institute';
import Departments from './Pages/AcademicPage/Departments';
import Schools from './Pages/AcademicPage/Schools';
import AffiliatedColleges from './Pages/AcademicPage/AffiliatedColleges';
import InternationalAffairs from './Pages/AcademicPage/InternationalAffairs';


import AcademicCouncil from './Pages/GovernancePage/AcademicCouncil';
import Senate from './Pages/GovernancePage/Senate';
import Syndicate from './Pages/GovernancePage/Syndicate';
import FinanceCommittee from './Pages/GovernancePage/FinanceCommittee';

import PublicationOffice from './Pages/PublicationsPage/PublicationOffice';
import AnnualReports from './Pages/PublicationsPage/AnnualReports';
import RuJournals from './Pages/PublicationsPage/RuJournals';
import Bidyabarta from './Pages/PublicationsPage/Bidyabarta';

import UndergraduateAdmission from './Pages/AdmissionPage/UndergraduateAdmission';
import PostgraduateAdmission from './Pages/AdmissionPage/PostgraduateAdmission';
import Diploma from './Pages/AdmissionPage/Diploma';
import AffiliatedCollegeAdmission from './Pages/AdmissionPage/AffiliatedCollegeAdmission';


import ICTCenter from './Pages/FacilitiesPage/ICTCenter';
import CentralLibrary from './Pages/FacilitiesPage/CentralLibrary';
import Transport from './Pages/FacilitiesPage/Transport';
import Alumni from './Pages/FacilitiesPage/Alumni';
import ScienceWorkshop from './Pages/FacilitiesPage/ScienceWorkshop';
import MentalHealthCenter from './Pages/FacilitiesPage/MentalHealthCenter';
import AcademicBuilding from './Pages/FacilitiesPage/AcademicBuilding';
import Associations from './Pages/FacilitiesPage/Associations';
import DifferentAssociations from './Pages/FacilitiesPage/DifferentAssociations';
import PhysicalEducation from './Pages/FacilitiesPage/PhysicalEducation';
import MedicalCenter from './Pages/FacilitiesPage/MedicalCenter';
import ResidenceHall from './Pages/FacilitiesPage/ResidenceHall';
import VarendraResearchMuseum from './Pages/FacilitiesPage/VarendraResearchMuseum';
import CentralScienceLab from './Pages/FacilitiesPage/CentralScienceLab';
import TSCC from './Pages/FacilitiesPage/TSCC';

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
          <Route path="/exam-controller" element={<ExamController />} />
          <Route path="/other-offices" element={<OtherOffices />} />

             {/* Administration Route End */}

             {/*Governance Route Start */}
        <Route path="/academic-council" component={AcademicCouncil} />
        <Route path="/senate" component={Senate} />
        <Route path="/syndicate" component={Syndicate} />
        <Route path="/finance-committee" component={FinanceCommittee} />


              {/*GovernancePage Route End */}

              {/* Academic Route Start */}

        <Route path="/faculty" element={<Faculty />} />
        <Route path="/institute" element={<Institute />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/schools" element={<Schools />} />
        <Route path="/affiliated-colleges" element={<AffiliatedColleges />} />
        <Route path="/international-affairs" element={<InternationalAffairs />} />

              {/* Academic Route End */}

              {/* Publications Route Start */}

          <Route path="/publication-office" element={<PublicationOffice />} />
          <Route path="/annual-reports" element={<AnnualReports />} />
          <Route path="/ru-journals" element={<RuJournals />} />
          <Route path="/bidyabarta" element={<Bidyabarta />} />

             {/* Publications Route End */}
           
             {/* Admission Route Start */}

          <Route path="/undergraduate-admission" element={<UndergraduateAdmission />} />
          <Route path="/postgraduate-admission" element={<PostgraduateAdmission />} />
          <Route path="/diploma" element={<Diploma />} />
          <Route path="/affiliated-college-admission" element={<AffiliatedCollegeAdmission />} />
             
             {/* Admission Route End */}

             {/* Facilities Route Start */}

          <Route path="/ict-center" element={<ICTCenter />} />
          <Route path="/central-library" element={<CentralLibrary />} />
          <Route path="/transport" element={<Transport />} />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="/science-workshop" element={<ScienceWorkshop />} />
          <Route path="/mental-health-center" element={<MentalHealthCenter />} />
          <Route path="/academic-building" element={<AcademicBuilding />} />
          <Route path="/associations" element={<Associations />} />
          <Route path="/different-associations" element={<DifferentAssociations />} />
          <Route path="/physical-education" element={<PhysicalEducation />} />
          <Route path="/medical-center" element={<MedicalCenter />} />
          <Route path="/residence-hall" element={<ResidenceHall />} />
          <Route path="/varendra-research-museum" element={<VarendraResearchMuseum />} />
          <Route path="/central-science-lab" element={<CentralScienceLab />} />
          <Route path="/tscc" element={<TSCC />} />

          {/* Facilities Route End */}


          {/* OnlineServices route Start here */}

          <Route path="/" element={<Card />} />
          <Route path="/webmail" element={<Webmail />} />
          <Route path="/info-update" element={<InformationUpdate />} />
          <Route path="/annual-report" element={<AnnualReport />} />
          <Route path="/certificate" element={<Certificate />} />
          <Route path="/form-fill" element={<FormFill />} />
          <Route path="/registration-form" element={<RegistrationForm />} />
          <Route path="/internet-registration-cancellation" element={<InternetRegistrationCancellation />} />
          <Route path="/student-feedback-system" element={<StudentFeedbackSystem />} />

           {/* OnlineServices route End here */}

            </Routes>
            
        </BrowserRouter>
    );
};

export default App;
