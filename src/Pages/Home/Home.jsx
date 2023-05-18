import React from 'react';
import Banner from './Banner';
import Gallery from './Gallery';
import Category from './Tab/Category';

const Home = () => {
    return (
        <div>
            <Banner />
            <Gallery />
            <Category />
        </div>
    );
};

export default Home;