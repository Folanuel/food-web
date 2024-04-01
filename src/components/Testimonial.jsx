import React from 'react';
import Carousel from './Carousel/Carousel';
import woman1 from '../assets/christina-wocintechchat-com-0Zx1bDv5BNY-unsplash.jpg'
import man1 from '../assets/ian-dooley-d1UPkiFd04A-unsplash.jpg'

const testimonialData = [
    {
        image: man1,
        name: 'John Doe',
        testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
        image: woman1,
        name: 'Jane Smith',
        testimonial: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    // Add more testimonials as needed
    ];

    const Testimonial = () => {
    return (
        <div className="bg-gradient-to-r from-red-400 via-gray-500 to-red-600 rounded-3xl w-full md:w-[1165px] h-full container mx-auto mt-8 pt-10 px-20 ">
        <h1 className='text-center font-bold text-4xl pb-6 text-white'>Word on the street &#127908;</h1>
        <Carousel testimonials={testimonialData} />
        </div>
    );
};

export default Testimonial;