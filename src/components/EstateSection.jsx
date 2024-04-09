import SingleState from './SingleState';
import { useEffect } from 'react';
import { useState } from 'react';

const EstateSection = ({homes}) => {
    const [homesData, setHomesData] = useState([]); 
    if(!homes){
        useEffect(()=>{
            fetch('estateData.json')
            .then(res=> res.json())
            .then(data=>setHomesData(data));
        },[])
    }
   
    return (
        <div className='my-8 grid grid-cols-1 max-w-7xl mx-auto md:grid-cols-2 lg:grid-cols-3 gap-5'>
          {
           homes ?( homes.map((home)=>
           <SingleState key={home.id} home={home}></SingleState>
       ) ):(homesData.map((home)=>
       <SingleState key={home.id} home={home}></SingleState>
   ) )
          }
            
            
        </div>
    );
};

export default EstateSection;