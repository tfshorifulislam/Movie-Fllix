import React, { use } from 'react';
import { CiShoppingCart } from 'react-icons/ci';
import { FaFire } from 'react-icons/fa';
import MovieCard from '../MovieCard/MovieCard';

const MovieData = ({ movieDataRes }) => {


    const allMovieData = use(movieDataRes);
    console.log(allMovieData);
    return (
        <div className='w-11/12 mx-auto'>
            <div className='flex justify-between items-center font-bold text-2xl md:text-4xl my-10'>
                <div className='flex gap-2'>
                    <h1>Trending Now</h1>
                    <FaFire className='text-purple-700 animate-pulse' />
                </div>
                <div className='relative btn'>
                    <CiShoppingCart className='text-4xl' />
                    <div class="badge bg-purple-700 text-white absolute right-10 -top-3">0</div>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
                {
                    allMovieData.map(movie => <MovieCard movie={movie} /> )
                }
            </div>
        </div>
    );
};

export default MovieData;