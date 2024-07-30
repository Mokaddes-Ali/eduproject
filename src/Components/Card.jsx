import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = ({ title, IconComponent, link, customClass }) => {
  return (
    <div className={`flex flex-col items-center justify-center p-4 m-2 border rounded-lg shadow-md bg-white hover:bg-gray-100 ${customClass}`}>
      <NavLink to={link}>
        <IconComponent className="text-blue-500 text-4xl mb-2 cursor-pointer" />
      </NavLink>
      <span className="text-blue-500 font-semibold">{title}</span>
    </div>
  );
};

export default Card;
