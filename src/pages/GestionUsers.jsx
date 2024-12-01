import React, { useState } from 'react';
import axios from 'axios';

function GestionUser() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [post, setPost] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const userData = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            phone_number: phoneNumber,
            post: post,
        };

        axios
            .post('http://127.0.0.1:8000/user_emp/user-employeurs/', userData) // Your API endpoint here
            .then((response) => {
                setMessage('User created successfully!');
                setFirstName('');
                setLastName('');
                setEmail('');
                setPhoneNumber('');
                setPost('');
            })
            .catch((error) => {
                setMessage('Error creating user');
            });
    };

    return (
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-4 text-center">Create New User</h1>
            <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First Name"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                />
                <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last Name"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                />
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                />
                <input
                    type="text"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="Phone Number"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                />
                <input
                    type="text"
                    value={post}
                    onChange={(e) => setPost(e.target.value)}
                    placeholder="Post"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                />
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white font-bold py-3 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                    Submit
                </button>
            </form>
            {message && (
                <p
                    className={`mt-4 text-center ${
                        message.includes('successfully')
                            ? 'text-green-500'
                            : 'text-red-500'
                    }`}
                >
                    {message}
                </p>
            )}
        </div>
    );
}

export default GestionUser;
