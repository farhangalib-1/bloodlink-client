
import React from 'react'

const page = async({params}) => {
    const {Id} = await params;
  return (
    <div>
        <h1 className='font-bold text-center'>User Individual Page</h1>
        <h1 className='text-center'>User ID: {Id}</h1>
        </div>
  )
}

export default page