import React from 'react';
import Card from './../../components/Card/Card'; // Import Card Component

export const Destination: React.FC = () => {
  return (
    <section className="py-12" id="destination">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-neutral-800 mb-8 text-center">Top Destinations</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card
            image="/assets/images/destination/manali.jpg"
            place="Manali, Himachal Pradesh"
            price="$999"
            timeAgo="Upcoming"
            location="India"
          />
          <Card
            image="/assets/images/destination/leh.jpg"
            place="Leh, Himachal Pradesh"
            price="$1,199"
            timeAgo="Coming Soon"
            location="India"
          />
          <Card
            image="/assets/images/destination/goa.jpg"
            place="Goa, Goa"
            price="$799"
            timeAgo="Coming soon."
            location="India"
          />
        </div>
      </div>
    </section>
  );
};