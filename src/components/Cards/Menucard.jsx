import React from 'react';

const Menucard = ({ imageUrl, title, description }) => {
    return (
        <div className="max-w-60 rounded-xl  shadow-xl mb-14">
        <img className="w-full rounded-t-xl" src={imageUrl} alt={title} />
        <div className="px-4 py-4 text-center rounded-b-xl">
            <div className='grid grid-cols-2'>
                <div className="font-bold text-md mb-2">{title}</div>
                <h1 className="font-bold text-md mb-2">5star</h1>
            </div>            
            <p className="text-gray-700 text-base">{description}</p>
        </div>
        </div>
    );
};

export default Menucard;
