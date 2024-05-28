// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '@/lib/store/features/cart/cartSlice';
import productReducer from './features/product/productSlice';

// Load cart state from local storage if it exists
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('cart');
    return serializedState ? { items: JSON.parse(serializedState) } : { items: [] };
  } catch (e) {
    console.warn("Could not load state from local storage", e);
    return { items: [] };
  }
};

// Save cart state to local storage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state.cart.items);
    localStorage.setItem('cart', serializedState);
  } catch (e) {
    console.warn("Could not save state to local storage", e);
  }
};

const preloadedState = {
  cart: loadState(),
};

export const makeStore = () => {
  const store = configureStore({
    reducer: {
      cart: cartReducer,
      product: productReducer,
    },
    preloadedState,
  });

  // Save the state to local storage whenever it changes
  store.subscribe(() => {
    saveState(store.getState());
  });

  return store;
};
