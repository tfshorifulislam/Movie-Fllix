import React from 'react';

const OpenMenu = ({ menuItems, setOpenMenu, handleMenu, openMenu }) => {
    
    return (
        <div>
            <ul className='flex flex-col gap-3'>
                {
                    menuItems.map(i =>
                        <li key={i} className='text-right'>
                            <button
                                onClick={() => {handleMenu(i) , setOpenMenu(false)}
                                    
                                } className='btn bg-transparent border-none'>{i}
                            </button>
                        </li>)
                }
            </ul>
        </div>
    );
};

export default OpenMenu;