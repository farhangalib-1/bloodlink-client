import { Avatar, Button } from '@heroui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Blogpost = ({ blogPost }) => {
    const date = new Date(blogPost.createdAt).toLocaleDateString("en-BD", {
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: "Asia/Dhaka",
    })
  return (
    <div>

        <div className = "lg:max-w-8/12 lg:mx-auto mt-10 p-4 border mx-3 rounded-lg shadow-md mb-7">
        <div className="flex justify-center">
            <Image className="rounded-lg w-full"  src={blogPost.image} alt={blogPost.title} width={800} height={400} />
            </div>
            <div className="flex items-center gap-3 mt-3">
            <p className="text-sm w-fit px-3 py-1 rounded-lg font-bold bg-red-100 text-red-500">Blood Donation</p>
            <p className="lg:text-lg text-sm text-gray-500">{date}</p>
            </div>

            <h1 className="lg:text-4xl text-2xl font-bold my-4">{blogPost.title}</h1>
            <div className="flex items-center gap-1 mb-4">
                <Avatar>
        <Avatar.Image alt="John Doe" src={blogPost.userImage} />
        <Avatar.Fallback>JD</Avatar.Fallback>
      </Avatar>
        <span className="ml-2 text-gray-600 lg:text-lg text-sm"> by <span className="font-bold"> {blogPost.name} </span></span>
            </div>
            <hr />
        <p className="text-gray-700 text-sm lg:text-lg mt-4 leading-relaxed">
            {blogPost.details}
        </p>
        <Link href="/blog">
        <Button className="mt-5 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">Back to the Blog</Button>
        </Link>
        </div>

    </div>
  )
}

export default Blogpost