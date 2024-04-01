import React from 'react'
import Menucard from '../components/Cards/Menucard'
import Jollof from '../assets/jollof-rice-and-chicken-upscaled.jpg'

const Menupage = () => {
    return (
        <div className="w-full h-full pl-14 pt-[120px] bg-white ">
            <h1 className='text-center font-bold mb-16 text-2xl'>Our menu</h1>            
            <div className='pl-24 grid grid-cols-1 md:grid-cols-3 md:space-x-3'>
                
                <Menucard 
                    imageUrl={Jollof}
                    title="Jollof Rice"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in lectus nec ligula consectetur aliquet."
                />
                <Menucard 
                    imageUrl={Jollof}
                    title="Jollof Rice"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in lectus nec ligula consectetur aliquet."
                />
                <Menucard 
                    imageUrl={Jollof}
                    title="Jollof Rice"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in lectus nec ligula consectetur aliquet."
                />
                <Menucard 
                    imageUrl={Jollof}
                    title="Jollof Rice"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in lectus nec ligula consectetur aliquet."
                />
                <Menucard 
                    imageUrl={Jollof}
                    title="Jollof Rice"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in lectus nec ligula consectetur aliquet."
                />
                <Menucard 
                    imageUrl={Jollof}
                    title="Jollof Rice"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in lectus nec ligula consectetur aliquet."
                />
                <Menucard 
                    imageUrl={Jollof}
                    title="Jollof Rice"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in lectus nec ligula consectetur aliquet."
                />
                <Menucard 
                    imageUrl={Jollof}
                    title="Jollof Rice"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in lectus nec ligula consectetur aliquet."
                />
                <Menucard 
                    imageUrl={Jollof}
                    title="Jollof Rice"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in lectus nec ligula consectetur aliquet."
                />
                <Menucard 
                    imageUrl={Jollof}
                    title="Jollof Rice"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in lectus nec ligula consectetur aliquet."
                />
                <Menucard 
                    imageUrl={Jollof}
                    title="Jollof Rice"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in lectus nec ligula consectetur aliquet."
                />
                <Menucard 
                    imageUrl={Jollof}
                    title="Jollof Rice"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in lectus nec ligula consectetur aliquet."
                />
            </div>
        </div>
    )
}

export default Menupage