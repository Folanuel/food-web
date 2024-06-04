import React from 'react'
import Menucard from '../components/Cards/Menucard'
import Jollof from '../assets/jollof-rice-and-chicken-upscaled.jpg'
import Food from '../assets/menu/WhatsApp Image 2024-05-27 at 19.53.27.jpeg'
import Food1 from '../assets/menu/WhatsApp Image 2024-05-29 at 01.29.10.jpeg'
import Food2 from '../assets/menu/WhatsApp Image 2024-05-29 at 01.30.24.jpeg'
import Food3 from '../assets/menu/WhatsApp Image 2024-05-29 at 01.32.27.jpeg'
import Food4 from '../assets/menu/WhatsApp Image 2024-05-29 at 01.35.18.jpeg'
import Food5 from '../assets/menu/WhatsApp Image 2024-05-29 at 01.52.33.jpeg'
import Food6 from '../assets/menu/WhatsApp Image 2024-05-29 at 02.33.21.jpeg'
import Food7 from '../assets/menu/WhatsApp Image 2024-05-29 at 02.35.45.jpeg'

const Menupage = () => {
    return (
        <div className="w-full h-full pl-11 pt-[120px] bg-white ">
            <h1 className='pr-7 text-center font-bold mb-16 text-2xl'>Our menu</h1>            
            <div className='pl-9 md:pl-16 grid grid-cols-1 md:grid-cols-3 md:space-x-3'>
                
                <Menucard 
                    imageUrl={Food6}
                    title="Plantain & Eggs"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in lectus nec ligula consectetur aliquet."
                />
                <Menucard 
                    imageUrl={Food}
                    title="Pepper Soup"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in lectus nec ligula consectetur aliquet."
                />
                <Menucard 
                    imageUrl={Food1}
                    title="Jollof Rice"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in lectus nec ligula consectetur aliquet."
                />                
                <Menucard 
                    imageUrl={Food3}
                    title="Stirfry Pasta"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in lectus nec ligula consectetur aliquet."
                />
                <Menucard 
                    imageUrl={Food4}
                    title="Swallow & soup"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in lectus nec ligula consectetur aliquet."
                />
                <Menucard 
                    imageUrl={Food5}
                    title="Rice and Stew"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in lectus nec ligula consectetur aliquet."
                />
                <Menucard 
                    imageUrl={Food7}
                    title="Bole & Fish"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in lectus nec ligula consectetur aliquet."
                />
                <Menucard 
                    imageUrl={Food2}
                    title="Mixture"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in lectus nec ligula consectetur aliquet."
                />                
            </div>
        </div>
    )
}

export default Menupage