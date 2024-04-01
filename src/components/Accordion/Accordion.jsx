import React, { useState } from 'react';

const Accordion = ({content, title}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="border border-rose-500 rounded-lg shadow-md">
        <div className="flex items-center justify-between p-4 cursor-pointer" onClick={toggleAccordion}>
            <h2 className="text-lg font-semibold">{title}</h2>
            <svg className={`w-6 h-6 ${isOpen ? 'transform rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M7 10l5 5 5-5z" />
            </svg>
        </div>
        {isOpen && (
            <div className="p-4">
            <p className="text-gray-700">{content}</p>
            </div>
        )}
        </div>
    );
};

export default Accordion;
