import React, { useState, useEffect } from 'react';

const Carousel = ({ testimonials }) => {
    const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentTestimonialIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevTestimonial = () => {
        setCurrentTestimonialIndex((prevIndex) =>
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    // Automatically move to the next testimonial at regular intervals
    useEffect(() => {
        const interval = setInterval(() => {
            nextTestimonial();
        }, 2000); // Adjust the interval time as needed (e.g., every 5 seconds)

        // Clear the interval when the component unmounts or when testimonials change
        return () => clearInterval(interval);
    }, [testimonials]);

    return (
        <div className="relative">
        <div className="carousel">
            <button className="absolute left-0 md:left-40 top-1/2 transform -translate-y-1/2  text-white text-4xl md:text-7xl p-2" onClick={prevTestimonial}>
            &lt;
            </button>
            <button className="absolute right-0 md:right-40 top-1/2 transform -translate-y-1/2  text-white text-4xl md:text-7xl p-2" onClick={nextTestimonial}>
            &gt;
            </button>
            <div className="overflow-hidden">
            <img
                className="block mx-auto rounded-full h-40 w-40 object-cover"
                src={testimonials[currentTestimonialIndex].image}
                alt={testimonials[currentTestimonialIndex].name}
            />
            </div>
        </div>
        <div className="text-center mt-9 text-white">
            <h2 className="text-lg font-semibold">{testimonials[currentTestimonialIndex].name}</h2>
            <p className="text-gray-900 pb-9">{testimonials[currentTestimonialIndex].testimonial}</p>
        </div>
        </div>
    );
};

export default Carousel;