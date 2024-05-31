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

    useEffect(() => {
        const interval = setInterval(nextTestimonial, 2000); // Adjust the interval time as needed

        return () => clearInterval(interval); // Clear the interval on unmount
    }, [testimonials]);

    return (
        <div className="relative">
            <div className="carousel">
                <button
                    className="absolute left-0 md:left-10 top-1/2 transform -translate-y-1/2 text-white text-4xl md:text-7xl p-2"
                    onClick={prevTestimonial}
                    aria-label="Previous Testimonial"
                >
                    &lt;
                </button>
                <button
                    className="absolute right-0 md:right-10 top-1/2 transform -translate-y-1/2 text-white text-4xl md:text-7xl p-2"
                    onClick={nextTestimonial}
                    aria-label="Next Testimonial"
                >
                    &gt;
                </button>
            </div>
            <div className="text-center mt-6 text-white">
                <h2 className="md:text-3xl text-cyan-400 font-semibold">{testimonials[currentTestimonialIndex].name}</h2>
                <p className="text-white md:text-xl pb-6 text-pretty mx-10">{testimonials[currentTestimonialIndex].testimonial}</p>
            </div>
        </div>
    );
};

export default Carousel;
