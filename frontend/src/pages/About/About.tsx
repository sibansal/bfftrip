// About.tsx
import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-16" id="about">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h3 className="text-sm text-primary uppercase">About Us</h3>
          <h2 className="text-4xl font-semibold text-gray-800 mt-2">Our Journey: From Friendship to Business</h2>
        </div>

        {/* Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center space-y-6">
            <p className="text-xl text-gray-700 leading-relaxed">
              It all started with three friends and a shared dream. What began as a casual conversation over coffee became a burning passion to change the way people experience travel. Each of us brought something unique to the table – one had the vision, one had the technical expertise, and the other had a deep love for adventure. 
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              We saw the potential to combine our skills, creativity, and drive to help others explore the world in ways they never imagined. That’s how **BFFTravel** was born – a travel agency created by friends, for people who crave the thrill of new experiences, the joy of discovering hidden gems, and the comfort of seamless travel planning. 
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              Together, we are more than just a team; we’re a family. Our shared values of trust, adventure, and delivering exceptional service guide everything we do. From selecting the best destinations to curating personalized travel packages, we aim to create unforgettable experiences for every traveler who chooses us. 
            </p>
          </div>
          <div className="flex justify-center items-center">
            <img
              src="/assets/images/friends.jpg"
              alt="Our Journey"
              className="w-full h-auto max-w-lg rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <h3 className="text-lg text-primary font-medium">Join us on this amazing journey</h3>
          <p className="text-xl text-gray-700 mt-2">
            Let us help you create memories that will last a lifetime. Explore the world, one adventure at a time, with **BFFTravel**.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
