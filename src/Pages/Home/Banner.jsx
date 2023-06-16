import React from 'react';
import bannerImg from '../../assets/banner2nd.jpg'
const Banner = () => {
    return (
        <div>
            <div className="hero lg:min-h-screen h-[420px]" style={{ backgroundImage: `url(${bannerImg})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 lg:text-5xl text-4xl  font-bold">Super Toys</h1>
                        <h2 className='text-3xl font-bold text-orange'>Grab your favorite action toys.</h2>
                        <p className="my-5 lg:w-1/2">Welcome to our action-packed world of toys! At our e-commerce website, we specialize in bringing you the latest and greatest action toys that will ignite your imagination and bring endless excitement to your playtime.</p>
                        <a href="#tabs" className='btn bg-orange'>Get Started</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;