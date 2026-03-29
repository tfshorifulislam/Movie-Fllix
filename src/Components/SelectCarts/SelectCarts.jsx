import React from 'react';
import SelectedCardMap from '../SelectedCardMap/SelectedCardMap';
import { GrRadialSelected } from "react-icons/gr";

const SelectCarts = ({ cartsData, setSection, setSelectedCart }) => {
    return (
        <div>

            {
                cartsData.length === 0 ?
                    (<div className='flex flex-col justify-center items-center my-20'>
                        <p className='font-bold text-3xl md:text-5xl mt-28 '>Your cart is empty!</p>
                        <p className='font-medium text-2xl mt-3 md:mt-5 text-red-500 animate-pulse btn'
                            onClick={() => { setSection('Home'), setSelectedCart(false) }}>
                            Go to Home page
                        </p>

                    </div>)
                    : <div>
                        <div className='flex items-center gap-5 w-11/12 mx-auto mt-10 text-2xl md:text-4xl font-bold'>
                            Your Selected card <GrRadialSelected className='text-red-500 animate-pulse' />

                        </div>
                        <SelectedCardMap cartsData={cartsData} />
                    </div>
            }
        </div>
    );
};

export default SelectCarts;