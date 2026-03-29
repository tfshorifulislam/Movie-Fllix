import React from 'react';

const OpenMenu = ({ menuItems, setOpenMenu, handleMenu, openMenu }) => {
    
    return (
        <div>
            <ul className='flex flex-col gap-3 text-left'>
                {
                    menuItems.map(i =>
                        <li key={i} className='text-right'>
                            <span
                                onClick={() => {handleMenu(i) , setOpenMenu(false)}
                                    
                                } className='btn bg-transparent border-none text-left'>{i}
                            </span>
                        </li>)
                }
            </ul>
        </div>
    );
};

export default OpenMenu;