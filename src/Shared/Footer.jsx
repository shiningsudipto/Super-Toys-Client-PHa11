import React from 'react';
import logo from '../assets/logo/a11LogoW.png'
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagramSquare, FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className=" p-10 bg-black text-white">
                <div className='flex justify-between'>
                    <div>
                        <img className='h-12' src={logo} alt="" />
                        <p>Super Toys Industries Ltd.<br />
                            supertoys@cartoon.com <br />
                            +880 1711111111
                        </p>
                    </div>
                    <div>
                        <span className="footer-title">Menu</span>
                        <li><Link className='hover:text-orange' to="/">Home</Link></li>
                        <li><Link className='hover:text-orange' to="/">All Toys</Link></li>
                        <li><Link className='hover:text-orange' to="/">My Toys</Link></li>
                        <li><Link className='hover:text-orange' to="/">Add A Toy</Link></li>
                        <li><Link className='hover:text-orange' to="/">Blogs</Link></li>
                    </div>
                    <div>
                        <span className="footer-title">Address</span>
                        <p>South Sagordi, <br />
                            Tiakhali Road <br />
                            Barishal <br />
                            1st floor, Super Toys
                        </p>
                    </div>
                    <div>
                        <span className="footer-title">Social Links</span>
                        <div className='mb-4'>
                            <div className='flex space-x-4'>
                                <FaFacebook className='text-3xl cursor-pointer hover:text-orange' />
                                <FaInstagramSquare className='text-3xl cursor-pointer hover:text-orange' />
                                <FaTwitter className='text-3xl cursor-pointer hover:text-orange' />
                                <FaGithub className='text-3xl cursor-pointer hover:text-orange' />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className=" items-center mt-8">
                        <div className='border-t border-orange mx-auto mb-6'></div>
                        <div className="text-center">
                            <p>Copyright © Super Toys - 2023 - All right reserved</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;