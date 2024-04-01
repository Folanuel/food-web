import React from 'react';
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import Meals from '../components/Meals';
import Testimonial from '../components/Testimonial';
import Footer from '../components/Footer';

const Homepage = () => {
    return (
        <div className=''>            
            <Main />
            <Meals />
            <Testimonial />            
        </div>
    )
}

export default Homepage