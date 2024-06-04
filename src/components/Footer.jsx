import React from 'react'
import HIK from '../assets/HIK-logo.jpg'
import Ig from '../assets/InstagramIG.png'
import X from '../assets/TwitterTwitter.png'
import Meta from '../assets/Frame 48096462facebook.png'
import In from '../assets/Frame 48096461linkedin.png'



const Footer = () => {
    return (
        <div>
        <div className="h-[0.1px] w-full bg-black mt-10"></div>
        <div className='mx-16 py-4 md:px-[130px] pt-10 md:flex md:items-center md:space-x-28'>
            <div className='space-y-5 '>
                <img src={HIK} alt='logo' className='w-20 h-20' />
                <p>Copyright © 2024 Hijab In The Kitchen.</p>
                <p>All rights reserved</p>
                <div className='flex'>
                <img src={Ig} alt='instagram' className='' />
                <img src={X} alt='twitter' className='' />
                <img src={Meta} alt='facebook' className='' />
                
                </div>
            </div>
            <div className='py-5 md:py-0 md:flex md:flex-row md:space-x-20 '>
                <div className='space-y-4'>
                <h1 className='text-xl font-bold pb-5'>Product</h1>
                <h2>Individual</h2>
                <h2>Businesses</h2>
                <h2>Request Demo</h2>
                <h2>Pricing</h2>
            </div>
            <div className='space-y-4 py-5 md:py-0'>
                <h1 className='text-xl font-bold pb-5'>Legal</h1>
                <h2 >Privacy Policy</h2>
                <h2>Time of service</h2>                
            </div>
            <div className='space-y-4 py-5 md:py-0'>
                <h1 className='text-xl font-bold pb-5'>Resources</h1>
                <h2>FAQS</h2>                
                <h2>Customer Stories</h2>
            </div>
            <div className='space-y-4 py-5 md:py-0'>
                <h1 className='text-xl font-bold pb-5'>Contact Us</h1>
                <h2 className=''>hijabinthekitchen@gmail.com</h2>
                <h2>+234 818 177 8424</h2>               
            </div>
            </div>
            
            
        </div>

        </div>
    )
}

export default Footer