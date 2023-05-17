import React from 'react';
import Navbar from '../Shared/Navbar';

const MainLayout = () => {
    return (
        <div className='container mx-auto'>
            <Navbar />
            <h2 className='text-3xl'>This is Main Layout</h2>
        </div>
    );
};

export default MainLayout;