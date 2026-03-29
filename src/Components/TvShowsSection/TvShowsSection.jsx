import React from 'react';
import { FaHandPointDown } from "react-icons/fa";

const TvShowsSection = ({ setSection }) => {
    return (
        <div className='flex justify-center items-center h-screen flex-col text-center'>
            <div className=' flex-col'>

                <h1 className='text-purple-700 font-bold text-4xl md:text-8xl'> No Signal </h1>
                <div className=''>
                    <span className='flex items-center justify-center my-5 gap-4'>
                        tap for <FaHandPointDown className='text-purple-700 animate-pulse text-4xl ' />
                    </span>
                    <p className='text-xl btn border-none bg-transparent' onClick={() => setSection('Home')}>Go Back Home</p>
                </div>
            </div>

        </div>
    );
};

export default TvShowsSection;