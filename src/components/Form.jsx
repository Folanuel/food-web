import React, { useState } from 'react';

const FormComponent = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        favoriteFood: '',
        favoriteFruits: '',
        favoriteSnacks: '',
        allergies: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
        ...formData,
        [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle form submission here, e.g., send data to backend
        console.log(formData);
    };

    return (
        <div className="max-w-md mx-auto bg-white p-8 pt-[120px] rounded-lg shadow-lg">
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                First Name:
            </label>
            <input
                type="text"
                name="firstName"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
            />
            </div>
            {/* Repeat the same pattern for other form fields */}
            <button
            type="submit"
            className="w-full px-4 py-2 bg-rose-500 text-white rounded-md hover:bg-rose-600 focus:outline-none focus:bg-rose-600"
            >
            Submit
            </button>
        </form>
        </div>
    );
};

export default FormComponent;
