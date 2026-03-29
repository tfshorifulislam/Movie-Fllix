import React, { useState } from 'react';
import logo from '../../assets/logo 3.png'
import { IoMenu } from "react-icons/io5";
import OpenMenu from '../OpenMenu/OpenMenu';

const NavBar = ({ section, setSection, setSelectedCart }) => {

    const menuItems = ['Home', 'Movies', 'TV Shows']
    const [openMenu, setOpenMenu] = useState(false);

    const handleMenu = (item) => {
        setSection(item)
        setSelectedCart(false)
    }
    return (
        <div className=''>
            <div className='flex justify-between items-center pt-3 md:pt-8 w-11/12 mx-auto'>
                <div className='flex w-25 h-auto'>
                    <img src={logo} alt="" />

                </div>
                <div className='flex md:justify-between gap-4  items-center'>
                    <div className='hidden md:flex'>
                        <ul className='flex gap-3 md:gap-6'>
                            {
                                menuItems.map(item =>
                                    <li key={item}>
                                        <button
                                            onClick={() => handleMenu(item)}
                                            className={` px-5 py-2 rounded-full cursor-pointer duration-1000 text-white
                                                ${section === item ?
                                                    'bg-purple-700  font-bold'
                                                    : ''}`}
                                        >{item}
                                        </button>
                                    </li>)
                            }
                        </ul>
                    </div>
                    <div className='flex items-center'>
                        <button className="btn btn-neutral bg-purple-600 border-none ">Sign In</button>

                        <IoMenu
                            onClick={() => setOpenMenu(!openMenu)}
                            className='text-white text-4xl cursor-pointer btn bg-transparent border-none shadow-none md:hidden'
                        />
                        <div
                            className={`py-10 px-5 bg-white rounded-2xl md:hidden absolute right-7 transition-all duration-1000
                             ${openMenu ?
                                    'top-20 opacity-100'
                                    : '-top-40 opacity-0'}`
                            }>

                            {
                                openMenu && <OpenMenu menuItems={menuItems} openMenu={openMenu} setOpenMenu={setOpenMenu} handleMenu={handleMenu} />
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;