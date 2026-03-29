import React from 'react';
import bg from '../../assets/hero-bg.jpg'
import NavBar from '../Navbar/NavBar';
const Hero = ({section, setSection, setSelectedCart}) => {
    return (
        <div>
            <div className='w-full h-screen relative'
                style={{ backgroundImage: `url(${bg})` }}>
                <div className='z-20 relative'>
                     <NavBar section={section} setSection={setSection} setSelectedCart={setSelectedCart} />
                </div>
                <div className="absolute z-10 inset-0 bg-black/50   flex flex-col justify-center items-center">
                    <h1 className='text-white text-center font-bold md:font-black text-4xl md:text-7xl md:leading-20 rounded-2xl md:rounded-4xl mt-20 md:mt-0'>
                        Unlimited movies, <br /> TV shows, and <br /> more
                    </h1>
                    <p className='text-md text-center  mt-5  font-normal text-white opacity-80'>Starts at USD 2.99. Cancel anytime.</p>
                    <p className='text-md  text-center mb-5 font-normal text-white opacity-80'>Ready to watch? Enter your email to create or restart your membership.</p>
                    <div className="flex flex-col md:flex-row gap-3  md:gap-5">
                        <div>
                            <label className="input w-full">
                                <input type="email" placeholder="Enter Your E-mail" required />
                            </label>
                            <div className="validator-hint hidden">Enter valid email address</div>
                        </div>
                        <button className="btn bg-purple-700 text-white border-none shadow-none">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;