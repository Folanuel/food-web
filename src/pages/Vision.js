import React from 'react'
import Explore from '../assets/explore.png'

const Vision = () => {
    return (
        <div className='w-full h-full pl-4 pt-[120px] bg-white grid grid-cols-1 md:grid-cols-2'>
            <div>
                <img src={Explore} alt="pishure"/>
            </div>
            <div>
                <h1 className='font-bold text-sm md:text-lg text-center pt-16 text-gray-600'>Our mission is to revolutionize the way people nourish their bodies by providing convenient access to delicious, nutritious meals. We are dedicated to delivering culinary excellence through our chef-crafted recipes, sourcing the freshest ingredients, and prioritizing health without compromising on taste. Through our commitment to sustainability, community, and wellness, we strive to empower individuals to make healthier choices while enjoying the convenience of our wholesome meals. Our goal is to inspire and support a vibrant, balanced lifestyle for our customers, one delicious meal at a time.</h1>
            </div>
        </div>
    )
}

export default Vision