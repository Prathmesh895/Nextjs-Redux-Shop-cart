"use client"
import { useAppSelector } from '@/lib/store/hooks'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function navbar() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const items = useAppSelector((state) => state.cart.items) ||[];
  return (
    <>
      <div className='flex justify-evenly p-5 shadow font-semibold'>
        <div><Link href='/'>Home</Link></div>
        <Link href='/cart'><div className='relative'>
          <img className='w-6' src="https://cdn-icons-png.flaticon.com/128/2838/2838838.png" alt="cart" />
          <span className="absolute -top-4 -right-5 h-6 w-6 flex items-center justify-center rounded-full  font-bold">
          {isClient ? items.length : 0}
          </span>

        </div>
        </Link>
      </div>
    </>
  )
}
