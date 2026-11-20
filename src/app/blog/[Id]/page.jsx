import Blogpost from '@/components/Blogpost';
import { blog } from '@/lib/actions';
import React from 'react'

const page = async({ params }) => {
    const {Id} = await params;
    const blogPost = await blog(Id); 
  return (
    <div>
        <Blogpost blogPost={blogPost} />
    </div>
  )
}

export default page