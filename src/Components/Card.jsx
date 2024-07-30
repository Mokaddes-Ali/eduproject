
import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = ({ title, IconComponent, link }) => {
  return (
    <NavLink to={link} className="flex flex-col items-center justify-center p-4 m-2 border rounded-lg shadow-md w-48 h-32 bg-white hover:bg-gray-100">
      <IconComponent className="text-blue-500 text-4xl mb-2" />
      <span className="text-blue-500 font-semibold">{title}</span>
    </NavLink>
  );
};

export default Card;
