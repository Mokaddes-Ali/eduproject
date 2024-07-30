import React from 'react';
import Card from '../../Components/Card';
import { cardData } from '../../Components/Data/cardData';
import Footer from '../../Components/Footer';

const Facilities = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-2xl font-bold mb-4">Facilities</h1>
      <div className="flex flex-wrap justify-center">
        <div className="flex flex-wrap w-full justify-center">
          {cardData.slice(21, 24).map((card, index) => (
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
          {cardData.slice(24, 27).map((card, index) => (
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
          {cardData.slice(27, 30).map((card, index) => (
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
          {cardData.slice(30, 33).map((card, index) => (
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
          {cardData.slice(33, 36).map((card, index) => (
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


export default Facilities;

