import React from 'react';
import Card from '../../Components/Card';
import { cardData } from '../../Components/Data/cardData';
import Footer from '../../Components/Footer';

const Publications = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-2xl font-bold mb-4">Publications</h1>
      <div className="flex flex-wrap justify-center">
        <div className="flex flex-wrap w-full justify-center">
          {cardData.slice(40, 43).map((card, index) => (
            <Card
              key={index}
              title={card.title}
              IconComponent={card.icon}
              link={card.link}
              customClass={card.customClass}
            />
          ))}
        </div>
        <div className="flex flex-wrap w-full justify-center">
          {cardData.slice(43, 44).map((card, index) => (
            <Card
              key={index}
              title={card.title}
              IconComponent={card.icon}
              link={card.link}
              customClass={card.customClass}
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}


export default Publications;

