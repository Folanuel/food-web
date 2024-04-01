import React from 'react'
import Card from './Cards/Card'
import Cocrice from '../assets/coconut-rice-with-lamb-upscaled.jpg'
import Soup from '../assets/eba-and-soup-upscaled.jpg'
import Jollof from '../assets/jollof-rice-and-chicken-upscaled.jpg'

const Meals = () => {
    return (
        <div className="w-full h-full bg-white pl-11 pb-4 mt-[80px] grid grid-cols-1 gap-6 md:grid-cols-3">
            <Card
                imageUrl={Jollof}
                title="Daily Meals"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in lectus nec ligula consectetur aliquet."
            />
            <Card
                imageUrl={Soup}
                title="Weekly Meals"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in lectus nec ligula consectetur aliquet."
            />
            <Card
                imageUrl={Cocrice}
                title="Monthly Meals"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in lectus nec ligula consectetur aliquet."
            />
        </div>
    )
}

export default Meals