import React from 'react'
import Accordion from '../components/Accordion/Accordion'

const Faqs = () => {
    return (
        <div className="w-full h-full space-y-4 px-12 pt-[120px] bg-white ">            
            <Accordion 
                title=" What are the delivery hours?"
                content="Our delivery hours are from 10:00 AM to 16:00 PM, Monday to Sunday. Please note that delivery times may vary based on your location and the time of day."
            />
            <Accordion 
                title="Can I schedule a delivery for a later time?"
                content=" Yes, you can schedule a delivery for a later time. This allows you to plan ahead and ensure your meal arrives exactly when you need it."
            />
            <Accordion 
                title="What if I have dietary restrictions or food allergies?"
                content=" We strive to accommodate all dietary restrictions and food allergies. We have a form which you will fill that asks about your allergies and dietary restrictions and other preferences."
            />
        </div>
    )
}

export default Faqs