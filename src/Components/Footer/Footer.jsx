import React from 'react';

const Footer = ({ menuItems }) => {
    return (
        <div className=' bg-gray-900'>
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
                    <fieldset className="w-80">
                        <label>Enter your email address</label>
                        <div className="join">
                            <input
                                type="text"
                                placeholder="username@site.com"
                                className="input input-bordered join-item text-gray-900 shadow-none" />
                            <button className="btn btn-primary join-item bg-purple-700 border-none">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </footer>
        </div>
    );
};

export default Footer;