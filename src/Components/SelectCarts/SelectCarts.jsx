import React from 'react';

const SelectCarts = ({ cartsData, setSection, setSelectedCart }) => {
    return (
        <div>

            {
                cartsData.length === 0 ?
                    (<div className='flex flex-col justify-center items-center my-20'>
                        <p className='font-bold text-5xl mt-28'>Your cart is empty!</p>
                        <p className='font-medium text-2xl mt-5 text-purple-700 animate-pulse btn'
                        onClick={()=>{setSection('Home'), setSelectedCart(false)} }>
                            Go to Home page
                        </p>

                    </div>)
                    : cartsData.map(i =>
                        <div key={i.id}>
                            <h1>{i.title}</h1>
                        </div>)
            }
        </div>
    );
};

export default SelectCarts;