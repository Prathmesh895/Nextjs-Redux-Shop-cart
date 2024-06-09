"use client"
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks';
import { setCart } from '@/lib/store/features/cart/cartSlice';

const useSyncCartAcrossTabs = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);

  useEffect(() => {
    // Function to sync state with localStorage
    const syncCart = () => {
      const storedCart = localStorage.getItem('cart');
      if (storedCart) {
        dispatch(setCart(JSON.parse(storedCart)));
      }
    };

    // Save the cart to localStorage whenever it changes
    localStorage.setItem('cart', JSON.stringify(cartItems));

    // Listen for storage events
    window.addEventListener('storage', syncCart);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('storage', syncCart);
    };
  }, [cartItems, dispatch]);
};

export default useSyncCartAcrossTabs;
