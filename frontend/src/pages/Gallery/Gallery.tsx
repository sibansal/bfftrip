// Gallery.tsx
import React, { useState } from "react";

const Gallery: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // List of image URLs (in public/images folder)
  const images = [
    "/assets/images/destination/manali.jpg",
    "/assets/images/destination/goa.jpg",
    "/assets/images/destination/leh.jpg",
    "/assets/images/destination/rishikesh_1.jpeg",
    "/assets/images/destination/rishikesh_2.jpeg",
    "/assets/images/destination/birbilling.jpeg",
    "/assets/images/destination/birbilling_2.jpeg",
    "/assets/images/destination/rishikesh_3.jpeg",
    // Add more image paths as needed
  ];

  // Open Modal with the selected image
  const openModal = (image: string) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  // Close Modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <section className="py-16 bg-neutral-100" id="gallery">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-8">
          <h3 className="text-sm text-gray-600 uppercase">Gallery</h3>
          <h2 className="text-4xl font-semibold text-gray-800 mt-2">
            Explore Our Places
          </h2>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div key={index} className="relative m-auto">
              <img
                src={image}
                alt={`Place ${index + 1}`}
                className="w-96 h-64 object-cover cursor-pointer rounded-lg transition-transform transform hover:scale-105"
                onClick={() => openModal(image)}
              />
            </div>
          ))}
        </div>

        {/* Modal for Enlarged Image */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
            <div className="relative">
              <button
                onClick={closeModal}
                className="absolute top-0 right-0 text-white p-2 bg-black rounded-full text-xl w-10 h-10"
              >
                X
              </button>
              <img
                src={selectedImage || ""}
                alt="Selected"
                className="w-full h-full max-h-screen object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
