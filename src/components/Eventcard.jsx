import { Button } from '@heroui/react'
import {ArrowRight} from '@gravity-ui/icons';
import React from 'react'
import Link from 'next/link';

const Eventcard = () => {
  return (
    <div className=" border border-gray-200 p-5 rounded-2xl bg-white">
      <div className="border w-20 rounded text-center">
        <h1 className="text-lg font-bold bg-red-100 text-red-500">May</h1>
        <h1 className="font-bold text-2xl">25</h1>
      </div>
      <h1 className="font-bold text-lg">City Hospital Drive</h1>
      <p>City Hospital, Dhaka</p>
      <p>9.00 AM - 2.00 PM</p>
     <Link href="/register" className="text-red-500 hover:text-red-700 flex items-center gap-1"> Register <ArrowRight/></Link>
    </div>
  )
}

export default Eventcard
