import React from 'react'
import Explore from '../assets/explore.png'

const Vision = () => {
    return (
        <div className="bg-gray-100 min-h-screen p-6 pt-[120px]">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">About Us</h1>
                <div className="flex flex-col md:flex-row items-center">
                    <img src={Explore} alt="About Us" className="w-full md:w-1/2 rounded-lg shadow-lg mb-6 md:mb-0 md:mr-6" />
                    <div className="text-lg text-gray-700">
                        <p className="mb-4">
                            Welcome to Hijab In The Kitchen, your number one source for delicious and convenient food.
                            We're dedicated to providing you the very best meals, with a focus on quality, customer service, and
                            uniqueness.
                        </p>
                        <h2 className="text-3xl font-semibold text-gray-800 mt-6 mb-4">Our Vision</h2>
                        <p className="mb-4">
                            To revolutionize the way people enjoy food by offering a healthy, seamless, delightful, and diverse culinary
                            experience that caters to every taste and dietary preference.
                        </p>
                        <h2 className="text-3xl font-semibold text-gray-800 mt-6 mb-4">Our Mission</h2>
                        <p className="mb-4">
                            At Hijab In The Kitchen, our mission is to deliver happiness through food. We aim to connect people with
                            a variety of culinary options from the best, ensuring that every meal is
                            a memorable experience.
                        </p>
                    </div>
                </div>
                <p className="text-lg text-gray-700 mb-4 mt-6">
                    We strive to achieve this by focusing on three core values:
                </p>
                <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
                    <li className="mb-2">Quality: We have top-rated chefs to bring you the best meals.</li>
                    <li className="mb-2">Convenience: Ordering food quick and hassle-free.</li>
                    <li className="mb-2">Sustainability: We are committed to eco-friendly practices and packaging.</li>
                </ul>
                <p className="text-lg text-gray-700">
                    Thank you for choosing Hijab In The Kitchen. We hope you enjoy our service as much as we enjoy bringing it to you.
                    If you have any questions or comments, please don't hesitate to contact us.
                </p>
            </div>
        </div>
    )
}

export default Vision