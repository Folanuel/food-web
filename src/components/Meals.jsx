import React from 'react'
import Card from './Cards/Card'
import Cocrice from '../assets/coconut-rice-with-lamb-upscaled.jpg'
import Soup from '../assets/eba-and-soup-upscaled.jpg'
import Jollof from '../assets/jollof-rice-and-chicken-upscaled.jpg'

const Meals = () => {
    return (
        <div className="w-full h-full bg-white pl-16 md:pl-[180px] pb-4 mt-[80px] grid grid-cols-1 gap-6 md:grid-cols-2">
            
            <Card
                imageUrl={Soup}
                title="Weekly Plan"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in lectus nec ligula consectetur aliquet."
            />
            <Card
                imageUrl={Cocrice}
                title="Weekend Plan"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in lectus nec ligula consectetur aliquet."
            />
        </div>
    )
}

export default Meals