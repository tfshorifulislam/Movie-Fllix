import React from 'react';

const SelectedCardMap = ({ cartsData }) => {
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
                                    <button className="btn bg-purple-700 text-white w-full">Your Favourite Item</button>
                                </div>
                            </div>
                        </div>
                    </div>)}
        </div>
    );
};

export default SelectedCardMap;