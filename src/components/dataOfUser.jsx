"use client"
import { add } from '@/lib/store/features/product/productSlice';
import { useAppDispatch } from '@/lib/store/hooks';
import React from 'react'
import { useState,useEffect } from 'react'
export default function dataOfUser() {
    // const [UserData,setUserData]=useState([]);

useEffect(()=>{
    fetchUsers();
},[]);

    const fetchUsers = async()=>{
        const res = await fetch("https://fakestoreapi.com/users");
        const data = await res.json();
         setUserData(data);
         console.log(data);
    }
  //  const dispatch = useAppDispatch();
  //  dispatch(add(UserData));
  return (
    <div>dataOfUser</div>
  )
}
