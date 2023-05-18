import React from 'react';
import bannerImg from '../../assets/banner2nd.jpg'
const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${bannerImg})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-5xl font-bold">Super Toys</h1>
                        <h2 className='lg:text-3xl font-bold text-orange'>Grab your favorite action toys.</h2>
                        <p className="my-5 lg:w-1/2">Welcome to our action-packed world of toys! At our e-commerce website, we specialize in bringing you the latest and greatest action toys that will ignite your imagination and bring endless excitement to your playtime.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;