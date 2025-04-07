import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
    return (
        <div className="relative h-[50vh] w-full bg-gray-100 flex flex-col items-center justify-center text-center p-6 shadow-md rounded-lg">
            <img 
                src="your-photo.jpg" 
                alt="Your Photo" 
                className="w-32 h-32 rounded-full object-cover shadow-lg border-4 border-white mb-4"
            />
            <h2 className="text-2xl font-bold text-gray-800">Satvik Malneedi</h2>
            <p className="text-gray-600">Computer Engineering | Georgia Tech</p>
            <div className="mt-3">
                <p className="text-lg text-gray-700 font-medium">Phone: (518) 368-6149</p>
                <p className="text-lg text-gray-700 font-medium">Email: your.email@example.com</p>
            </div>
            <div className="flex space-x-6 mt-4">
                <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 text-2xl navbar-elements">
                    <FaGithub />
                </a>
                <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-2xl navbar-elements">
                    <FaLinkedin />
                </a>
            </div>
        </div>
    );
}

export default Contact;