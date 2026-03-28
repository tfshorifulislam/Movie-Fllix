import React, { use } from 'react';
import { FaCartArrowDown } from 'react-icons/fa';


const MovieData = ({ movieDataRes }) => {
    const allMovieData = use(movieDataRes);
    console.log(allMovieData);
    return (
        <div className='w-11/12 mx-auto'>
            <div className='flex justify-between items-center font-bold text-2xl md:text-4xl my-3 md:my-6 '>
                <h1>Trending Now</h1>
                <FaCartArrowDown className='btn' />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
                {
                    allMovieData.map(movie =>
                        <div>
                            <div className="border-2 border-[#00000025] rounded-2xl shadow-lg md:shadow-xl p-7">
                                <figure>
                                    <img className='rounded-sm md:rounded-2xl'
                                        src={movie.image}
                                        alt={movie.title} />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">{movie.title}</h2>
                                    <p>{movie.description}</p>


                                </div>
                                    <div className='flex justify-between items-center'>
                                        <button className='btn bg-purple-700 text-white shadow-2xl'>Add to Cart</button>
                                        <p className='font-bold py-2 px-3 rounded-md border'>Price: {movie.price}</p>
                                    </div>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default MovieData;