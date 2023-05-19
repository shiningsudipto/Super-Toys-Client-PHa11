import React from 'react';
import Banner from './Banner';
import Gallery from './Gallery';
import Category from './Tab/Category';
import useTitle from '../../Hook/useTitle';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner />
            <Gallery />
            <Category />
        </div>
    );
};

export default Home;