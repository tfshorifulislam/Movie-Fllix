import React from 'react';
import { FaHandPointDown } from "react-icons/fa";

const MovieSection = ({ setSection }) => {
    return (
        <div className='flex justify-center items-center h-screen flex-col animate-pulse'>
            <h1 className='text-red-500 font-bold text-6xl md:text-8xl'> 404 </h1>
            <div className=''>
                <span className='flex items-center justify-center my-5 gap-4'>
                    tap for <FaHandPointDown className='text-red-500 animate-pulse text-4xl ' />
                </span>
                <p className='text-xl btn border-none bg-transparent' onClick={() => setSection('Home')}>Go Back Home</p>
            </div>

        </div>
    );
};

export default MovieSection;