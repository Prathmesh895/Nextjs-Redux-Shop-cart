"use client"
import React, { useEffect, useState } from 'react';
import { add } from '@/lib/store/features/cart/cartSlice';
import { useAppDispatch } from '@/lib/store/hooks/index';

export default function Cart() {
  const [productData, setProductData] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');
  const dispatch = useAppDispatch();

  const handleAddData = (product) => {
    dispatch(add(product));
    setSuccessMessage(`${product.title} has been successfully added to the cart.`);
    
    // Clear the success message after 3 seconds
    setTimeout(() => {
      setSuccessMessage('');
    }, 3000);

    // console.log('ProductId', product.id);
  }

  useEffect(() => {
    fetdata();
  }, []);

  const fetdata = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProductData(data);
      // console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <main className='bg-yellow-300 '>
        <center className='text-lg py-2 font-semibold'>Welcome to store</center>
        {successMessage && (
          <div className='text-center py-2 bg-green-300 text-green-800 font-semibold'>
            {successMessage}
          </div>
        )}
        <div className='lg:grid grid-cols-4 my-5 lg:mx-20    bg-gray-100'>
          {productData.map(product => (
            <ul key={product.id} className='bg-white m-5 p-8 shadow-xl'>
              <li><img src={product.image} alt="product.image" className='w-48 h-48' /></li>
              <li className='font-semibold'> {product.title}</li>
              <li >Price: <span className='font-semibold'>{product.price}</span> </li>
              <li>{product.category}</li>
              <button onClick={() => handleAddData(product)} className='bg-violet-500 text-white py-1 px-2'>Add To Cart</button>
            </ul>
          ))}
        </div>
      </main>
    </>
  );
}
