// "use client"
// import { useAppDispatch, useAppSelector } from '@/lib/store/hooks'
// import { remove,incrementQuantity,decrementQuantity } from '@/lib/store/features/cart/cartSlice';
// import React, { useEffect, useState } from 'react'


// export default function page() {
//   const [isClient, setIsClient] = useState(false);
//   const cartItems = useAppSelector((state) => state.cart.items);
//   const dispatch = useAppDispatch();
 
//   useEffect(() => {
//     setIsClient(true);
//   }, []);
//   if (!isClient) {
//     return null; // or return a loading spinner, or some placeholder content
//   }
//   const handleRemove = (id) => {
//     if (window.confirm("Do you really want to remove this item?")) {
//       dispatch(remove(id));
//     }
//   }
//   const handleIncrement = (id) => {
//     dispatch(incrementQuantity(id));
//   };

//   const handleDecrement = (id) => {
//     const item = cartItems.find(item => item.id === id);
//     if (item) {
//       if (item.quantity > 1) {
//         dispatch(decrementQuantity(id));
//       } else if (window.confirm("Do you really want to remove this item?")) {
//         dispatch(decrementQuantity(id));
//       }
//     }
//   };

//   return (
//     <>
//       <div className=' bg-yellow-200 min-h-screen'>
//         <center className='text-lg py-2 font-semibold'>Welcome To Cart</center>

//         <div className='lg:mx-60 bg-white min-h-96'>
//         <h1 className='p-5 font-semibold'>Shoping Cart</h1>
//           <div className='flex justify-center p-5 items-center'>
//             {
//              cartItems.length ===  0 ?(
//                 <React.Fragment>
//                   <div className='text-lg font-semibold text-gray-500'>
//                   Cart is empty
//                   </div>
//                 </React.Fragment>
//               ):(
//             <table className="min-w-full bg-white">
//               <tbody>
//                 {cartItems.map((item) => (
//                   <tr key={item.id} className="border-b">
//                     <td className="py-2 px-4 row-span-5">
//                       <img src={item.image} alt="item image" className="lg:w-20 lg:h-20" />
//                     </td>
//                     <td className="py-2 px-4 font-semibold lg:w-[30%]">{item.title}</td>
//                     <td className="py-2 px-4 font-semibold">{item.price}</td>
//                     <td className="py-2 px-4">
//                     <button
//                         className="bg-gray-200 rounded-full py-1 px-3 mr-2"
//                         onClick={() => handleIncrement(item.id)}
//                       >
//                         +
//                       </button>
//                       <span>{item.quantity}</span>
//                       <button
//                         className="bg-gray-200 rounded-full py-1 px-3 ml-2"
//                         onClick={() => handleDecrement(item.id)}
//                       >
//                         -
//                       </button>
//                     </td>
//                     <td className="py-2 px-4">
//                       <button
//                         className="bg-violet-500 text-white py-1 px-2 rounded"
//                         onClick={() => handleRemove(item.id)}
//                       >
//                         Remove
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//             )
//           }

//           </div>
//         </div>
//       </div>
//     </>

//   )
// }


"use client";
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks';
import { remove, incrementQuantity, decrementQuantity } from '@/lib/store/features/cart/cartSlice';
import React, { useEffect, useState } from 'react';

export default function Page() {
  const [isClient, setIsClient] = useState(false);
  const cartItems = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // or return a loading spinner, or some placeholder content
  }

  const handleRemove = (id) => {
    if (window.confirm("Do you really want to remove this item?")) {
      dispatch(remove(id));
    }
  };

  const handleIncrement = (id) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = (id) => {
    const item = cartItems.find((item) => item.id === id);
    if (item) {
      if (item.quantity > 1) {
        dispatch(decrementQuantity(id));
      } else if (window.confirm("Do you really want to remove this item?")) {
        dispatch(decrementQuantity(id));
      }
    }
  };

  return (
    <div className="bg-yellow-200 min-h-screen">
      <center className="text-lg py-2 font-semibold">Welcome To Cart</center>
      <div className="lg:mx-60 bg-white min-h-96">
        <h1 className="p-5 font-semibold">Shopping Cart</h1>
        <div className="p-5">
          {cartItems.length === 0 ? (
            <div className="text-lg font-semibold text-gray-500">Cart is empty</div>
          ) : (
            <>
              {/* Mobile View */}
              <div className="block lg:hidden">
                {cartItems.map((item) => (
                  <div key={item.id} className="border-b p-4 flex flex-col items-center">
                    <img src={item.image} alt="item image" className="w-32 h-32 max-w-xs mx-auto" />
                    <div className="py-2 font-semibold">{item.title}</div>
                    <div className="py-2 font-semibold">{item.price}</div>
                    <div className="py-2 flex items-center">
                      <button
                        className="bg-gray-200 rounded-full py-1 px-3 mr-2"
                        onClick={() => handleIncrement(item.id)}
                      >
                        +
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        className="bg-gray-200 rounded-full py-1 px-3 ml-2"
                        onClick={() => handleDecrement(item.id)}
                      >
                        -
                      </button>
                    </div>
                    <button
                      className="bg-violet-500 text-white py-1 px-2 rounded mt-2"
                      onClick={() => handleRemove(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>

              {/* Desktop View */}
              <div className="hidden lg:block">
                <table className="min-w-full bg-white">
                  <tbody>
                    {cartItems.map((item) => (
                      <tr key={item.id} className="border-b">
                        <td className="py-2 px-4">
                          <img src={item.image} alt="item image" className="lg:w-20 lg:h-20" />
                        </td>
                        <td className="py-2 px-4 font-semibold lg:w-[30%]">{item.title}</td>
                        <td className="py-2 px-4 font-semibold">{item.price}</td>
                        <td className="py-2 px-4">
                          <button
                            className="bg-gray-200 rounded-full py-1 px-3 mr-2"
                            onClick={() => handleIncrement(item.id)}
                          >
                            +
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            className="bg-gray-200 rounded-full py-1 px-3 ml-2"
                            onClick={() => handleDecrement(item.id)}
                          >
                            -
                          </button>
                        </td>
                        <td className="py-2 px-4">
                          <button
                            className="bg-violet-500 text-white py-1 px-2 rounded"
                            onClick={() => handleRemove(item.id)}
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
