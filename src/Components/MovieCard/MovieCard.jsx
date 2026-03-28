import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const MovieCard = ({ movie, cartsData, setCartsData }) => {
    const [addCart, setAddCart] = useState(false)
    const handleCard = () => {
        setAddCart(true)
        setCartsData(cartsData + 1)
        setCartsData([...cartsData, movie])
        toast.info(`${movie.title} Add Successfully`)
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
                    <div className='flex justify-between items-center'>
                        <button
                            onClick={() => handleCard()}
                            disabled={addCart ? true : false}
                            className={`btn  text-white shadow-2xl duration-500
                                ${addCart === true ?
                                    'bg-gray-500'
                                    : 'bg-purple-700'
                                }`}>
                            {
                                addCart === true ?
                                    'Success'
                                    : 'Add to Cart'
                            }
                        </button>
                        <p className='font-bold py-2 px-3 rounded-md border'>Price: {movie.price}</p>
                    </div>
                </div>
            </div>
            {/* <ToastContainer /> */}
        </div>
    );
};

export default MovieCard;