import React from 'react';
import loading from '../assets/images/loading.gif';

const Loading = () => {
    return (
        <div className='min-h-screen flex items-center justify-center'>
            <img className='w-2/4' src={loading} alt='loading' />
        </div>
    );
};

export default Loading;