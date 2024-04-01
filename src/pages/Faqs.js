import React from 'react'
import Accordion from '../components/Accordion/Accordion'

const Faqs = () => {
    return (
        <div className="w-full h-full space-y-4 px-12 pt-[120px] bg-white ">
            <Accordion 
                title="Daily Meals"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in lectus nec ligula consectetur aliquet."
            />
            <Accordion 
                title="Daily Meals"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in lectus nec ligula consectetur aliquet."
            />
            <Accordion 
                title="Daily Meals"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in lectus nec ligula consectetur aliquet."
            />
            <Accordion 
                title="Daily Meals"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in lectus nec ligula consectetur aliquet."
            />
        </div>
    )
}

export default Faqs