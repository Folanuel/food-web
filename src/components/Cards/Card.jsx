import React from 'react';

const Card = ({ imageUrl, title, description }) => {
    return (
        <div className="bg-white border-2 border-rose-500 max-w-xs rounded-xl shadow-xl hover:scale-105">
            <div className=" rounded-lg w-full h-auto p-4">
            <img className="w-[300px] h-[200px] " src={imageUrl} alt={title} />
            </div>        
        <div className="px-6 py-4 text-center">
            <div className="text-red-600 font-bold text-xl mb-2">{title}</div>
            <p className="text-gray-700 text-base">{description}</p>
        </div>
        <p className='bg-rose-500 text-white text-center w-fit mx-auto mb-4 px-4 py-2 rounded-lg hover:bg-red-600 cursor-pointer'>Subcribe</p>
        </div>
    );
};

export default Card;
