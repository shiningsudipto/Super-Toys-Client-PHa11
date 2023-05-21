import React from 'react';
import logo from '../assets/logo/a11LogoW.png'
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagramSquare, FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className=" p-10 bg-black text-white">
                <div className='flex justify-between flex-col lg:flex-row items-center text-center lg:space-y-0 space-y-6'>
                    <div>
                        <img className='h-12' src={logo} alt="" />
                        <p>Super Toys Industries Ltd.<br />
                            supertoys@cartoon.com <br />
                            +880 1711111111
                        </p>
                    </div>
                    <div>
                        <span className="footer-title">Menu</span>
                        <p><Link className='hover:text-orange' to="/">Home</Link></p>
                        <p><Link className='hover:text-orange' to="/allToys">All Toys</Link></p>
                        <p><Link className='hover:text-orange' to="/myToys">My Toys</Link></p>
                        <p><Link className='hover:text-orange' to="/addAToy">Add A Toy</Link></p>
                        <p><Link className='hover:text-orange' to="/blogs">Blogs</Link></p>
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
                                <a href="https://www.facebook.com/shiningsudipto">
                                    <FaFacebook className='text-3xl cursor-pointer hover:text-orange' />
                                </a>
                                <a href="https://www.instagram.com/shiningsudipto/">
                                    <FaInstagramSquare className='text-3xl cursor-pointer hover:text-orange' />
                                </a>
                                <a href="https://twitter.com/ShiningSudipto">
                                    <FaTwitter className='text-3xl cursor-pointer hover:text-orange' />
                                </a>
                                <a href="https://github.com/shiningsudipto">
                                    <FaGithub className='text-3xl cursor-pointer hover:text-orange' />
                                </a>
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