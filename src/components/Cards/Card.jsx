import React from 'react';
import { PaystackButton } from 'react-paystack';

const config = {
    reference: (new Date()).getTime().toString(),
    email: "user@example.com",
    amount: 20000, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: 'pk_test_6688ed224fdf9c7ac9752fe25152eff59b042ca7',
    };

const Card = ({ imageUrl, title, description }) => {
    // you can call this function anything
    const handlePaystackSuccessAction = (reference) => {
      // Implementation for whatever you want to do with reference and after success call.
        console.log(reference);
    };

    // you can call this function anything
    const handlePaystackCloseAction = () => {
      // implementation for  whatever you want to do when the Paystack dialog closed.
        console.log('closed')
    }

    const componentProps = {
        ...config,
        text: 'Subscribe',
        onSuccess: (reference) => handlePaystackSuccessAction(reference),
        onClose: handlePaystackCloseAction,
    };

    return (
        <div className="bg-white border-2 border-rose-500 max-w-xs rounded-xl shadow-xl hover:scale-105">
            <div className=" rounded-lg w-full h-auto p-4">
            <img className="w-[300px] h-[200px] " src={imageUrl} alt={title} />
            </div>        
        <div className="px-6 py-4 text-center">
            <div className="text-red-600 font-bold text-xl mb-2">{title}</div>
            <p className="text-gray-700 text-base">{description}</p>
        </div>
        <div className="flex justify-center items-center ">
            <PaystackButton {...componentProps} className='bg-rose-500 text-white text-center w-fit mx-6 mb-4 px-4 py-2 rounded-lg hover:bg-red-600 cursor-pointer'/>
        </div>
                
        </div>
    );
};

export default Card;
