import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return (
        <div className="bg-black w-screen h-3">
        <nav className="bg-black shadow-md">
            <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                <div className="flex items-center">
                    <img src="/path/to/university-logo.png" className="h-10 mr-3" />
                    <span className="text-xl font-semibold">University of Rajshahi</span>
                </div>
                <div className="space-x-4">
                    <NavLink to="/" exact className="text-gray-700 hover:text-blue-500" activeClassName="text-blue-500 font-bold">
                     Home
                    </NavLink>
                    <NavLink to="/governance" className="text-gray-700 hover:text-blue-500" activeClassName="text-blue-500 font-bold">
                        Governance
                    </NavLink>
                    <NavLink to="/administration" className="text-gray-700 hover:text-blue-500" activeClassName="text-blue-500 font-bold">
                        Administration
                    </NavLink>
                    <NavLink to="/iqac" className="text-gray-700 hover:text-blue-500" activeClassName="text-blue-500 font-bold">
                        IQAC
                    </NavLink>
                    <NavLink to="/academic" className="text-gray-700 hover:text-blue-500" activeClassName="text-blue-500 font-bold">
                        Academic
                    </NavLink>
                    <NavLink to="/facilities" className="text-gray-700 hover:text-blue-500" activeClassName="text-blue-500 font-bold">
                        Facilities
                    </NavLink>
                    <NavLink to="/admission" className="text-gray-700 hover:text-blue-500" activeClassName="text-blue-500 font-bold">
                        Admission
                    </NavLink>
                    <NavLink to="/publications" className="text-gray-700 hover:text-blue-500" activeClassName="text-blue-500 font-bold">
                        Publications
                    </NavLink>
                    <NavLink to="/online-services" className="text-gray-700 hover:text-blue-500" activeClassName="text-blue-500 font-bold">
                        Online Services
                    </NavLink>
                </div>
            </div>
        </nav>
        </div>
    );
};

export default Navbar;

