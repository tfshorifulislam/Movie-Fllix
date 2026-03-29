import React from 'react';

const MovieSection = ({setSection}) => {
    return (
        <div className='flex justify-center items-center h-screen flex-col animate-pulse'>
            <h1 className='text-purple-700 font-bold text-6xl md:text-8xl'> 404 </h1>
            <p className='text-xl btn' onClick={()=> setSection('Home')}>Go Back Home</p>

        </div>
    );
};

export default MovieSection;