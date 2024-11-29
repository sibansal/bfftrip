import React from 'react';
import { FaCloudSun, FaBiking, FaMusic, FaEye } from 'react-icons/fa'; // React icons
import ServiceCard from './../../components/Card/ServiceCard'; // Import the new ServiceCard component

const Services: React.FC = () => {
  return (
    <section className="py-16 bg-neutral-100" id="services">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Row 1: Category */}
        <div className="text-center mb-4">
          <h3 className="text-sm text-gray-600 uppercase">Category</h3>
        </div>

        {/* Row 2: We Offer Best Services */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-gray-800">We Offer the Best Services</h2>
        </div>

        {/* Row 3: Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1: Calculated Weather */}
          <ServiceCard
            icon={FaCloudSun}
            title="Calculated Weather"
            description="Stay updated with real-time weather forecasts tailored for your destination. Whether it’s sunny or rainy, we’ve got you covered with precise weather predictions."
          />

          {/* Service 2: Adventure Activities */}
          <ServiceCard
            icon={FaBiking}
            title="Adventure Activities"
            description="Explore thrilling activities like paragliding, ziplining, mountain biking, and more. Get your adrenaline pumping with unforgettable adventures at your travel destination."
          />

          {/* Service 3: Local Events */}
          <ServiceCard
            icon={FaMusic}
            title="Local Events"
            description="Enjoy the local vibe with live music cafés, festivals, cultural exhibitions, and more. Dive into the heart of the city with events that bring the community together."
          />

          {/* Service 4: Best Sightseeing */}
          {/* <ServiceCard
            icon={FaEye}
            title="Best Sightseeing"
            description="Discover the most iconic sights in your destination. From breathtaking landscapes to historic landmarks, experience the best sightseeing spots that will leave you in awe."
          /> */}
        </div>
      </div>
    </section>
  );
};

export default Services;
