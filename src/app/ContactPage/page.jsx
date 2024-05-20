import React from 'react';

const ContactDetails = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-[85%] m-auto">
            <h3 className="text-2xl font-bold mb-4">Contact Details</h3>
            <br />
            <hr />
            <br />
            <ul className="list-disc pl-6 space-y-2">
                <li className="flex items-center">
                    <span className="font-semibold mr-2 text-gray-800">Facebook:</span>
                    <a href="https://www.facebook.com/apeskill" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">facebook.com/apeskill</a>
                </li>
                <hr />
                <li className="flex items-center">
                    <span className="font-semibold mr-2 text-gray-800">Phone:</span>
                    <a href="tel:9851061356" className="text-blue-500 hover:underline">985-1061356</a>
                </li><hr />
                <li className="flex items-center">
                    <span className="font-semibold mr-2 text-gray-800">Email:</span>
                    <a href="mailto:ihsdc2004@gmail.com" className="text-blue-500 hover:underline">ihsdc2004@gmail.com</a>
                </li><hr />
                <li className="flex items-start">
                    <span className="font-semibold mr-2 text-gray-800">Address:</span>
                    <address className="text-gray-600">
                        Bharatpur belchowk, Nepal
                    </address>
                </li>
            </ul>
            <br />
            <p className="text-sm text-gray-500 mt-4">Feel free to contact us for any inquiries or assistance.</p>
        </div>
    );
};

export default ContactDetails;
