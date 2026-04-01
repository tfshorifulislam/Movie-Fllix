import React from 'react';
import { toast } from 'react-toastify';

const SelectedCardMap = ({ cartsData, setCartsData }) => {
    const handleRemove = (id) => {
        const removeFromCart = cartsData.filter(i => i.id !== id)
        setCartsData(removeFromCart)
        toast.success('Successfully Remove')
    }
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 my-10 w-11/12 mx-auto'>
            {
                cartsData.map(i =>
                    <div key={i.id}>
                        <div className=''>
                            <div className="animate-fadeInOnce border-2 border-[#00000025] rounded-2xl shadow-lg md:shadow-xl p-5">
                                <figure className='flex justify-center items-center'>
                                    <img className='rounded-sm md:rounded-2xl'
                                        src={i.image}
                                        alt={i.title} />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">{i.title}</h2>
                                    <p>{i.description}</p>
                                    <div>
                                        <button
                                            onClick={() => handleRemove(i.id)}
                                            className="btn bg-red-500 text-white">
                                            Remove from Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)}
        </div>
    );
};

export default SelectedCardMap;