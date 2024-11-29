import React, { useState } from 'react';
import Slider from 'react-slick';

const testimonialsData = [
  {
    quote: "Nice words coming soon after first trip.",
    name: "",
    designation: "",
    image: "https://via.placeholder.com/100",
  },
  {
    quote: "Nice words coming soon after first trip.",
    name: "",
    designation: "",
    image: "https://via.placeholder.com/100",
  },
  {
    quote: "Nice words coming soon after first trip.",
    name: "",
    designation: "",
    image: "https://via.placeholder.com/100",
  }
];

const Testimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    beforeChange: (current: number, next: number) => setCurrentTestimonial(next),
  };

  return (
    <section className="py-16 bg-neutral-100" id="testimonials">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Col 1: Testimonial Header */}
          <div className="text-center lg:text-left">
            <h3 className="text-sm text-gray-600 uppercase">Testimonials</h3>
            <h2 className="text-4xl font-semibold text-gray-800 mt-2">What People Say About Us</h2>
          </div>

          {/* Col 2: Testimonial Content */}
          <div className="col-span-2">
            <Slider {...settings}>
              {testimonialsData.map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                  <p className="text-lg text-gray-600 italic">"{testimonial.quote}"</p>
                  <div className="mt-4 flex items-center justify-center">
                    {/* <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full mr-4"
                    /> */}
                    <div className="text-left">
                      <p className="font-semibold text-gray-800">{testimonial.name}</p>
                      <p className="text-gray-600">{testimonial.designation}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
