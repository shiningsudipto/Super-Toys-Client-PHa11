import React from 'react';
import gif from '../assets/nf.gif'
import webP from '../assets/404nf.webp'
import { Link } from 'react-router-dom';

const Notfound = () => {
    return (
        <div>
            <h3>Link Not Found</h3>
            <div className='flex justify-center'>
                <img className='h-96' src={webP} alt="" />
            </div>
            <div className='text-center'>
                <Link className='btn bg-orange border-0 my-6' to="/">Back to home</Link>
            </div>
        </div>
    );
};

export default Notfound;