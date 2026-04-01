import React, { useState } from 'react';
import { toast } from 'react-toastify';

const MovieCard = ({ movie, cartsData, setCartsData }) => {
    const isExist = cartsData.find(i => i.id === movie.id)
    const handleCard = () => {
        if (isExist) {
            toast('Already added');
            return;
        }
        else {
            setCartsData([...cartsData, movie])
            toast.info(`${movie.title} Add Successfully`)
        }
    }
    
    return (
        <div>
            <div>
                <div className="animate-fadeInOnce border-2 border-[#00000025] rounded-2xl shadow-lg md:shadow-xl p-7">
                    <figure>
                        <img className='rounded-sm md:rounded-2xl'
                            src={movie.image}
                            alt={movie.title} />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{movie.title}</h2>
                        <p>{movie.description}</p>


                    </div>
                    <div className='flex justify-between gap-3 items-center'>
                        <button
                            onClick={() => handleCard()}
                            className={`btn  text-white shadow-2xl duration-500 
                                ${isExist ?
                                    'bg-gray-500'
                                    : 'bg-red-500'
                                }`}>
                            {
                                isExist ?
                                    'Success'
                                    : 'Add to Cart'
                            }
                        </button>
                        <p className='font-bold p-2 rounded-md border'>Download:${movie.price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;