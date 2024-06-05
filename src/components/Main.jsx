import React from 'react'
import Header from '../assets/header.png'

const Main = () => {
    return (                
        <div className="w-full h-full px-12 pt-[120px] bg-white grid grid-cols-1 md:grid-cols-2 space-y-4 md:space-y-0  ">
            <div className="my-auto pl-4 space-y-7">
            <h1 className="text-5xl md:text-7xl text-red-600 font-bold space-y-1 pt-8">Healthy Food On Demand</h1>
            <p className="text-xl md:text-2xl text-red-600 font-semibold">Delicious meals curated based on your preference &#128523; .</p>
            <p className='text-gray-400 pt-3 text-lg md:text-xl font-sans'>Where culinary delight meets personalized wellness. Our service is designed to cater to your specific tastes and nutritional needs, offering a diverse array of delicious meals meticulously curated to align with your preferences...</p>
        </div>
        <div>
            <img src={Header} alt="logo + info" />
        </div>

        </div>
        
    )
}

export default Main