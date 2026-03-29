import React from 'react';

const Footer = ({ menuItems }) => {
    return (
        <div className=' bg-gray-900'>
            <div>
                <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 space-y-14 text-white mt-16 p-10">
                    <nav className='flex flex-col'>
                        <h6 className="footer-title">Services</h6>
                        {
                            menuItems.map(i => <a className='link link-hover flex flex-col' key={i}>{i}</a>)
                        }
                    </nav>
                    <nav className='flex flex-col'>
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav className='flex flex-col'>
                        <h6 className="footer-title">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                    <form>
                        <h6 className="footer-title">Newsletter</h6>
                        <fieldset className="w-full">
                            <div className="flex flex-col md:flex-row gap-4">
                                <input
                                    type="text"
                                    placeholder="username@site.com"
                                    className="input input-bordered join-item text-gray-900 shadow-none" />
                                <button className="btn btn-primary join-item bg-red-500 border-none">Subscribe</button>
                            </div>
                        </fieldset>
                    </form>
                </footer>
                <div className='border-t-2 border-white opacity-20 pb-10'></div>
                <p className='flex pb-5 justify-center items-center text-white'>© 2026 MovieFlix. All rights reserved. </p>

            </div>
        </div>
    );
};

export default Footer;