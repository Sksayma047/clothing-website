import React, { useContext, useEffect, useState } from 'react';
import Title from './Title';
// import ProductItem from './ProductItem';
import { ShopContext } from '../context/ShopContext';

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
   const bestSeller = products.filter((item) => (item.bestSeller));
   setBestSeller(bestSeller.slice(0,5));
  },[]) // added products as dependency

  return (
    <div className='my-10 px-4 sm:px-6 lg:px-8'>
      <div className='text-center py-8'>
        <Title text1={'BEST'} text2={'SELLERS'} />
        <p className='w-3/4 mx-auto text-xs sm:text-sm md:text-base text-gray-600'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla repudiandae voluptas cumque nisi.
        </p>
      </div>
      
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
          bestSeller.map((item,index) => (
            <ProductItem
              key={index} 
               id={item._id}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          ))
        }
      </div>
    </div>
  );
};

export default BestSeller;
