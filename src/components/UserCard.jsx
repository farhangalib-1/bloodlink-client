import { Avatar, Button, Chip } from '@heroui/react';
import Image from 'next/image';
import React from 'react'
import { VscVerifiedFilled } from "react-icons/vsc";
import { MdVerifiedUser } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { IoIosMan } from "react-icons/io";
const UserCard = ({userData}) => {
  return (
    <div className= "border border-gray-200 rounded-2xl p-5 m-5">
    <Chip className='text-green-700 bg-green-200 mb-3' > <MdVerifiedUser/> Available</Chip>
    <div className="flex gap-3 items-center">
    <Avatar>
          <Avatar.Image
            alt="Junior Garcia"
            src={userData.image}
            className="border-2 bg-white border-red-500 rounded-full p-0.5"
          />
          <Avatar.Fallback delayMs={400}>JD</Avatar.Fallback>
        </Avatar>
        
       <div>    
       <div className="flex items-center-safe gap-1 mb-1">
        <h1 className='text-lg font-bold'>{userData.name}</h1>
        <VscVerifiedFilled className="text-red-500" />
        
       
        </div>
      <h className="text-red-700 bg-red-100 text-xs font-bold rounded-2xl px-4 py-1">{userData.bloodGroup}</h>
      </div> 
      </div>
    <div className="my-3">
        <h1 className='flex gap-1.5 font-semibold items-center'> <MdLocationOn className="text-red-500" />Location: {userData.district}</h1>
        <h1 className='flex gap-1.5 font-semibold items-center'  ><FaCalendarAlt className="text-red-500" />Age: {userData.age}</h1>
        <h1 className='flex gap-1.5 font-semibold items-center'  ><IoIosMan className="text-red-500" />Gender: {userData.gender}</h1>
        <Button className="mt-1.5 w-full bg-red-500 text-white hover:bg-red-600">View Profile</Button>
    </div>
    </div>
  )
}

export default UserCard
