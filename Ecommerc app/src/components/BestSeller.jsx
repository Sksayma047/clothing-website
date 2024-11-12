// import React, { useContext, useEffect, useState } from 'react';
// import Title from './Title';
// import ProductItem from './ProductItem';
// import { ShopContext } from '../context/ShopContext';

// const BestSeller = () => {
//     const { products } = useContext(ShopContext);
//     const [bestSeller, setBestSeller] = useState([]);

//     useEffect(() => {
        
//             const bestProduct = products.filter((item) => item.bestSeller);
//             setBestSeller(bestProduct.slice(0, 5));
        
//     }, []); 

//     return (
//         <div className='my-10'>
//             <div className='text-center text-3xl py-8'>
//                 <Title text1={'BEST'} text2={'SELLERS'} />
//                 <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
//                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla repudiandae voluptas cumque nisi,
//                 </p>
//             </div>
//             <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
//                 { 
//                     bestSeller.map((item,index) => (
//                         <ProductItem 
//                             key={index} 
//                             id={item._id} 
//                             name={item.name} 
//                             image={item.image} 
//                             price={item.price} 
//                         />
//                     ))
//                 }
//             </div>
//         </div>
//     );
// }

// export default BestSeller;







import React, { useContext, useEffect, useState } from 'react';
import Title from './Title';
import ProductItem from './ProductItem';
import { ShopContext } from '../context/ShopContext';

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    if (products) {
      const bestProduct = products.filter((item) => item.bestSeller);
      setBestSeller(bestProduct.slice(1, 5));
    }
  }, [products]); // added products as dependency

  return (
    <div className='my-10 px-4 sm:px-6 lg:px-8'>
      <div className='text-center py-8'>
        <Title text1={'BEST'} text2={'SELLERS'} />
        <p className='w-3/4 mx-auto text-xs sm:text-sm md:text-base text-gray-600'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla repudiandae voluptas cumque nisi.
        </p>
      </div>
      
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {bestSeller.length > 0 ? (
          bestSeller.map((item) => (
            <ProductItem
              key={item._id}
              id={item._id}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          ))
        ) : (
          <p className='col-span-full text-center text-gray-500'>
            No best sellers available.
            bestseller length is 5 and show the products
          </p>
        )}
      </div>
    </div>
  );
};

export default BestSeller;
