import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa'; // Location Icon

// Define the types for the Card props
interface CardProps {
  image: string;
  place: string;
  price: string;
  timeAgo: string;
  location: string;
}

const Card: React.FC<CardProps> = ({ image, place, price, timeAgo, location }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden w-full md:w-80">
      {/* Image Section */}
      <img src={image} alt={place} className="w-full h-48 object-cover" />
      
      {/* Card Content */}
      <div className="p-4">
        <h3 className="text-xl font-semibold text-neutral-800">{place}</h3>
        {/* <p className="text-lg text-primary font-semibold mt-2">{price}</p> */}
        {/* <p className="text-sm text-neutral-600 mt-1">{timeAgo} ago</p> */}
        
        {/* Location with Icon */}
        <div className="flex items-center mt-2 text-sm text-neutral-600">
          <FaMapMarkerAlt className="mr-1" />
          <span>{location}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
