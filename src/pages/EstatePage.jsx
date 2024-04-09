import React from 'react';
import { useLoaderData } from 'react-router-dom';
import EstateSection from '../components/EstateSection';

const EstatePage = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <div>
            <EstateSection data={data}></EstateSection>
        </div>
    );
};

export default EstatePage;