import React from 'react';
import Carousel from './Carousel/Carousel';


const testimonialData = [
    {        
        name: 'Ridwan Salaudeen',
        testimonial: 'The porrige was >>>>>>>>>>>.'
    },
    {        
        name: 'Abdul Azeez',
        testimonial: 'The food was too great for the price.'
    },
    {        
        name: 'Immanuel Henshaw',
        testimonial: 'The rice was special.'
    },
    {        
        name: 'Rokeeb',
        testimonial: 'I enjoyed the food with my friends, it was very tasty.'
    },
    {        
        name: 'Demola',
        testimonial: 'we have to order more, cause the beans was great.'
    },
    // Add more testimonials as needed
    ];

    const Testimonial = () => {
    return (
        <div className="bg-gradient-to-r from-red-400 via-gray-500 to-red-600 rounded-3xl w-full md:w-[1165px] h-full container mx-auto mt-8 pt-10 px-20 pb-20">
        <h1 className='text-center font-bold text-4xl pb-6 text-white'>Word on the street &#127908;</h1>
        <Carousel testimonials={testimonialData} />
        </div>
    );
};

export default Testimonial;