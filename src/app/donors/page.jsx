import UserCard from '@/components/UserCard';
import { getUser } from '@/lib/actions'
import React from 'react'

const page = async () => {
    const userData =  await getUser();
    console.log(userData);
  return (
    <div>
      <h1 className="text-5xl font-bold mb-1 text-center">Our Donors</h1>
      <h1 className="text-2xl font-bold text-center text-red-500">Real People, Real Heroes</h1>
      <p className="text-gray-600 text-center my-4">Meet our amazing donors who are always ready to save lives. <br /> You can search, filter and connect with donors near you.</p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {
            userData.map(el=><UserCard key={el._id} userData={el}/>)
        }
      </div>
    </div>
  )
}

export default page
