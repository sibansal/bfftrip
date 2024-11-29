import React from 'react';
import { IconType } from 'react-icons';

interface ServiceCardProps {
  icon: IconType;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 text-center">
      <div className='flex justify-center'><Icon className="text-7xl text-primary mb-4" /></div>
      <h4 className="text-xl font-semibold text-gray-800">{title}</h4>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
};

export default ServiceCard;
