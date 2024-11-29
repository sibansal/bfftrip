import React from 'react';
import { FaMapMarkerAlt, FaCreditCard, FaClock } from 'react-icons/fa'; // Icons for steps

const BookingProcess: React.FC = () => {
  return (
    <section className="py-16" id="booking-process">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Row 1: Easy and Fast */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-gray-800">Easy and Fast</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Column 1: Steps */}
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold text-gray-800">Book your next trip in 3 easy steps</h3>
            
            <div className="flex items-center text-lg text-gray-700">
              <FaMapMarkerAlt className="text-primary mr-3" />
              <p className='text-2xl'>Choose Destination</p>
            </div>

            <div className="flex items-center text-lg text-gray-700">
              <FaCreditCard className="text-primary mr-3" />
              <p className='text-2xl'>Make Payment</p>
            </div>

            <div className="flex items-center text-lg text-gray-700">
              <FaClock className="text-primary mr-3" />
              <p className='text-2xl'>Reach Location on Time</p>
            </div>
          </div>

          {/* Column 2: Image Placeholder */}
          <div className="flex justify-center items-center">
            <div className="w-72 h-72 bg-gray-300 rounded-lg flex justify-center items-center text-white text-2xl shadow-2xl shadow-black">
              <img src="/assets/images/booking-process.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingProcess;
