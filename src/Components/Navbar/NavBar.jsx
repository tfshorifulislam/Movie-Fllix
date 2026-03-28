import React, { useState } from 'react';
import logo from '../../assets/plex-167.png'
const NavBar = () => {
    const [active, setActive] = useState('Home')

    const menuItems = ['Home', 'Movies', 'TV Shows']

    return (
        <div className=''>
            <div className='flex justify-between items-center mt-5 w-full'>
                <div className='flex w-8 h-8'>
                    <img src={logo} alt="" />
                </div>
                <div className='flex md:justify-between gap-4  items-center'>
                    <div className='hidden md:flex'>
                        <ul className='flex gap-3 md:gap-6'>
                            {
                                menuItems.map(item =>
                                    <li key={item}>
                                        <button onClick={() => setActive(item)}
                                            className={`px-5 py-2 rounded-full cursor-pointer duration-1000 ${active === item ?
                                                'bg-purple-700 text-white'
                                                : ''}`}
                                        >{item}
                                        </button>
                                    </li>)
                            }
                        </ul>
                    </div>
                    <div>
                        <button className="btn btn-neutral bg-purple-600 border-none ">Sign In</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;