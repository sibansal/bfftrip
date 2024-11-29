// Contact.tsx
import React from 'react';
import { FaPhoneAlt, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <section className="py-16 bg-neutral-100" id="contact">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Row 1: Title */}
        <div className="text-center lg:text-left mb-8">
          <h3 className="text-sm text-gray-600 uppercase">Contact Us</h3>
          <h2 className="text-4xl font-semibold text-gray-800 mt-2">Get in Touch</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column: Contact Person Details */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Our Contact Persons</h3>

            {/* Person 1 */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-800">Lavisha Kapila</h4>
              <p className="text-gray-600 mb-2">Customer Service</p>
              <div className="flex items-center text-gray-800 mb-4">
                <FaPhoneAlt className="mr-2" />
                <a href="tel:+919317537066" className="text-blue-600 hover:underline">+91 9317537066</a>
              </div>
              {/* <div className="flex items-center text-gray-800 mb-4">
                <FaEnvelope className="mr-2" />
                <a href="mailto:johndoe@example.com" className="text-blue-600 hover:underline">johndoe@example.com</a>
              </div> */}
              <div className="flex items-center text-gray-800">
                <FaWhatsapp className="mr-2" />
                <a href="https://wa.me/+919317537066" className="text-green-600 hover:underline">Chat on WhatsApp</a>
              </div>
            </div>

            {/* Person 2 */}
            <div>
              <h4 className="text-lg font-semibold text-gray-800">Ekta Sharma</h4>
              <p className="text-gray-600 mb-2">Customer Service</p>
              <div className="flex items-center text-gray-800 mb-4">
                <FaPhoneAlt className="mr-2" />
                <a href="tel:+917018876322" className="text-blue-600 hover:underline">+91 7018876322 </a>
              </div>
              {/* <div className="flex items-center text-gray-800">
                <FaEnvelope className="mr-2" />
                <a href="mailto:janesmith@example.com" className="text-blue-600 hover:underline">janesmith@example.com</a>
              </div> */}
            </div>
          </div>

          {/* Right Column: Google Map */}
          <div className="relative w-full h-80 rounded-lg overflow-hidden">
            <iframe title='contact-map'
              src="https://maps.google.com/maps?q=ajauli+himachal&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy"></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
