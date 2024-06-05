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
                    description="A delicious combination of ripe plantains and scrambled eggs, perfect for breakfast or brunch."
                />
                <Menucard 
                    imageUrl={Food}
                    title="Pepper Soup"
                    description="Spicy and flavorful soup made with fresh ingredients and a variety of spices."
                />
                <Menucard 
                    imageUrl={Food1}
                    title="Jollof Rice"
                    description="Classic West African dish made with rice, tomatoes, and a blend of spices."
                />                
                <Menucard 
                    imageUrl={Food3}
                    title="Stirfry Pasta"
                    description="Pasta stir-fried with vegetables and a savory sauce."
                />
                <Menucard 
                    imageUrl={Food4}
                    title="Swallow & soup"
                    description="Traditional dish with a choice of swallow (fufu, pounded yam) and a rich, flavorful soup."
                />
                <Menucard 
                    imageUrl={Food5}
                    title="Rice and Stew"
                    description="Steamed rice served with a hearty stew made from tomatoes, onions, and various spices."
                />
                <Menucard 
                    imageUrl={Food7}
                    title="Bole & Fish"
                    description="Grilled plantains served with roasted fish."
                />
                <Menucard 
                    imageUrl={Food2}
                    title="Mixture"
                    description="A delightful mix of various ingredients to tantalize your taste buds."
                />                
            </div>
        </div>
    )
}

export default Menupage