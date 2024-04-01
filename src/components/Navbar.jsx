import React, { useState } from 'react';
import HIK from '../assets/HIK-logo.jpg'
import { PiHamburgerBold } from "react-icons/pi";
import {Link} from 'react-router-dom';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };



    return (
        <nav className="w-full p-2 drop-shadow-xl bg-white flex justify-between items-center fixed z-[100] ">
        <div className="flex items-center space-x-[500px]">
            {/* Logo on the left */}
            <Link to="/">
            <img src={HIK} alt="Logo" className="h-12 mr-4 md:pl-12 cursor-pointer" />
            </Link>            
            {/* Menu */}
            <div className="hidden md:flex-grow md:flex md:justify-center ">
            <ul className="flex space-x-8">
            <li><Link to="/menu" className="text-xl text-gray-700 font-bold font-sans hover:text-red-600">Menu</Link></li>
            <li><Link to="/faqs" className="text-xl text-gray-700 font-bold font-sans hover:text-red-600">FAQs</Link></li>
            <li><Link to="/vision" className="text-xl text-gray-700 font-bold font-sans hover:text-red-600">About</Link></li>
            </ul>
            </div>
        </div>
        {/* Contact on the right */}
        <div>
            <a href="#" className="hidden mr-14 md:block text-lg bg-red-600 text-white text-center rounded-2xl py-2 px-4 hover:bg-white hover:text-red-600">Contact</a>
        </div>
        {/* Hamburger Menu Icon - Display on Mobile */}
            <div className="md:hidden">
                <button onClick={toggleMobileMenu} className="text-xl text-black hover:text-red-600">
                    <PiHamburgerBold className='text-xl' />
                </button>
            </div>
            {/* Mobile Menu - Display on Mobile */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-16 right-4 bg-white border border-gray-300 shadow-lg rounded-md">
                    <ul className="py-2">
                        <li><a href="#" className="block px-4 py-2 text-xl text-black hover:text-red-600">Menu</a></li>
                        <li><a href="#" className="block px-4 py-2 text-xl text-black hover:text-red-600">FAQs</a></li>
                        <li><a href="#" className="block px-4 py-2 text-xl text-black hover:text-red-600">About</a></li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
