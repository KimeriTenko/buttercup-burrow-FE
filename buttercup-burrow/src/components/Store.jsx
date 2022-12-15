import React, {useState} from 'react';
import {data} from '../data.js';

const Store = () => {
    // console.log(data);
    const [setItems] = useState(data);

    /*Filter Product Type*/
    const filterType = (category) => {
        setItems(
            data.filter((item) => {
                return item.category === category;
            })
        );
    };

  return (
    <div name='store' className='max-w-[1640px] h-full m-auto px-4 py-12 justify-center text-[#A29682] bg-[#F8FAF6]'>
        <h1 className='text-4xl font-bold inline border-b-4 text-[#A29682] border-[#C991BC]'>
            Check out our latest sale items</h1>

        {/* Filter Row */}
        <div className='flex flex-col lg:flex-row justify-between pb-8'></div>

            {/* Filter Type */}
            <p className='font-bold text-[#A29682] justify-center'>Filter Type</p>
            <div className='flex justify-between flex-wrap'>
            <button onClick={() => setItems(data)}
            className='m-1 border-[#555047] text-[#A29682] hover:text-[#F8FAF6]'>
            
            All
            </button>
            <button onClick={() => filterType('all items')}
            className='m-1 border-[#555047] text-[#A29682] hover:text-[#F8FAF6]'>

            Tote Bags
            </button>
            <button onClick={() => filterType('tote bags')}
            className='m-1 border-[#555047] text-[#A29682] hover:text-[#F8FAF6]'>
            
            Linocut Prints
            </button>
            <button onClick={() => filterType('linocut prints')}
            className='m-1 border-[#555047] text-[#A29682] hover:text-[#F8FAF6]'>
            
            Quilts
            </button>
            <button onClick={() => filterType('quilts')}
            className='m-1 border-[#555047] text-[#A29682] hover:text-[#F8FAF6]'>

            Wallhangings
            </button>
            <button onClick={() => filterType('wallhangings')}
            className='m-1 border-[#555047] text-[#A29682] hover:text-[#F8FAF6]'>

            New Items
            </button>
            <button onClick={() => filterType('new items')}
            className='m-1 border-[#555047] text-[#A29682] hover:text-[#F8FAF6]'>

            Clearance
            </button>
            <button onClick={() => filterType('clearance')}
            className='m-1 border-[#555047] text-[#A29682] hover:text-[#F8FAF6]'>
                </button>
                
            </div>

        {/* Display All Items */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 pt-20'>
          {data.map((item, index) => (
            <div key={index} className='border shadow-lg shadow-[#555047] rounded-lg hover:scale-105 duration-300'>
              <img src={item.image} alt={item.name} className='w-full h-[200px] object-contain rounded-t-lg' />
              <div className='flex justify-between px-2 py-4'>
                <p className='font-bold'>{item.name}</p>
                <p><span className='bg-[#F8FAF6] text-[#555047] p-1 rounded-full'>{item.price}</span></p>
                </div>
            </div>
          ))}
        </div>
 
        </div>
     
  );
};


export default Store;