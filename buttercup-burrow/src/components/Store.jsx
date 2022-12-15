import React, {useState} from 'react';
import {data} from '../data.js';

const Store = () => {
    // console.log(data);
    const [items, setItems] = useState(data);

    /*Filter Product Type*/
    const filterType = (category) => {
        setItems(
            data.filter((item) => {
                return item.category === category;
            })
        );
    };
    
  return (
    <div className='max-w-[1640px] h-full m-auto px-4 pt-8 justify-center text-[#A29682] bg-[#F8FAF6]'>
        <h1 className='text-4xl font-bold inline border-b-4 text-[#A29682] border-[#C991BC]'>Our Current Stock</h1>

        {/* Filter Row */}
        <div className='flex flex-col lg:flex-row justify-between'></div>

            {/* Filter Type */}
            <p className='font-bold border-[#555047] text-[#A29682] pt-8 justify-center'>Filter Type</p>
            <div className='flex justify-between flex-wrap'>

            <button onClick={() => setItems(data)}
            className='m-1 border-[#555047] text-[#A29682] hover:text-[#555047] hover:bg-[#FBE9BF]'>
            All</button>

            <button onClick={() => filterType('tote bags')}
            className='m-1 border-[#555047] text-[#A29682] hover:text-[#555047] hover:bg-[#FBE9BF]'>
            Tote Bags</button>

            <button onClick={() => filterType('linocut prints')}
            className='m-1 border-[#555047] text-[#A29682] hover:text-[#555047] hover:bg-[#FBE9BF]'>
            Linocut Prints</button>

            <button onClick={() => filterType('quilts')}
            className='m-1 border-[#555047] text-[##A29682] hover:text-[#555047] hover:bg-[#FBE9BF]'>
            Quilts</button>

            <button onClick={() => filterType('wall hangings')}
            className='m-1 border-[#555047] text-[#A29682] hover:text-[#555047] hover:bg-[#FBE9BF]'>
            Wall Hangings</button>
            <button onClick={() => filterType('new items')}
            className='m-1 border-[#555047] text-[#A29682] hover:text-[#555047] hover:bg-[#FBE9BF]'>
            New Items</button>

            <button onClick={() => filterType('clearance')}
            className='m-1 border-[#555047] text-[#A29682] hover:text-[#555047] hover:bg-[#FBE9BF]'>
            Clearance</button>
                
            </div>

        {/* Display All Items */}
        <div className='grid md:grid-cols-3 gap-4 pt-8'>
          {items.map((item, index)=> (
            <div key={index} className='border shadow-lg shadow-[#555047] rounded-lg hover:scale-105 duration-300'>
              <img src={item.image} alt={item.name} className='w-full h-[200px] object-contain rounded-t-lg' />
              <div className='flex justify-between px-2 py-4'>
                <p className='font-bold'>{item.name}</p>
                <p><span className='bg-[#F8FAF6] text-[#555047] p-1 rounded-full'>{item.price}</span></p>
                <button className='text-[#555047] bg-[#F8D894] flex:wrap'>Add to Cart</button>
                </div>
            </div>
          ))}
        </div>
    </div>
     
  );
};


export default Store;