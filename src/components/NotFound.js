import React from 'react';
import notFound from '../assets/images/notFound.png';

const NotFound = () => {
    return (
        <div className='flex items-center justify-center'>
            <img className='w-full h-auto' src={notFound} alt="not found" />
        </div>
    );
};

export default NotFound;