import React from 'react';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';

const MainLayout = () => {
    return (
        <div className=''>
            <Navbar />
            <h2 className='text-3xl'>This is Main Layout</h2>
            <Footer />
        </div>
    );
};

export default MainLayout;