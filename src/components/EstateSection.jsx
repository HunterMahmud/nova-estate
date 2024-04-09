import React from 'react';
import SingleState from './SingleState';

const EstateSection = ({data}) => {
    return (
        <div className='grid grid-cols-1 max-w-7xl mx-auto md:grid-cols-2 lg:grid-cols-3 gap-5'>
            <SingleState data={data[0]}></SingleState>
            <SingleState data={data[1]}></SingleState>
            <SingleState data={data[3]}></SingleState>
            
        </div>
    );
};

export default EstateSection;