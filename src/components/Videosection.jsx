
import React from 'react'


const Videosection = () => {
  return (
      <div>
        <h1 className='font-bold text-3xl md:text-4xl text-center'>Watch & Get Inspired</h1>
      <p className="text-center text-xs md:text-lg text-gray-600 mb-10">Learn how your donation changes lives through real stories and expert guidance</p>
      <div className="my-10 grid grid-cols-1 md:grid-cols-3 gap-6 mx-3 md:mx-20 ">
        <div>
       <iframe className="rounded-2xl" width="100%" height="270" src="https://www.youtube.com/embed/2tsd8HqgoXE" title="The blood donation process - Canadian Blood Services - CC" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
       <h1 className="font-bold text-center">The blood donation process - Canadian Blood Services - CC</h1>
       </div>
       <div>
       <iframe className="rounded-2xl" width="100%" height="270" src="https://www.youtube.com/embed/pQbZxfUP0r4" title="Give blood. Give plasma. Give hope."  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
       <h1 className="font-bold text-center">Give blood. Give plasma. Give hope.</h1>
       </div>
       <div>
       <iframe className="rounded-2xl" width="100%" height="270" src="https://www.youtube.com/embed/802H7o247CE" title="The Benefits of Blood Donation" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
       <h1 className="font-bold text-center">The Benefits of Blood Donation</h1>
       </div>
    </div>
    </div>
    
  )
}

export default Videosection
