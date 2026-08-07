import React from 'react'
import Eventcard from './Eventcard'
import {CircleCheckFill} from '@gravity-ui/icons';

const Upcommingevents = () => {
  return (
    <div className="grid grid-cols-1 mx-3 md:grid-cols-6 md:mx-20 gap-6 my-10 md:my-20">
      <div className="col-span-4 rounded-2xl p-5 bg-gray-100">
        <div className="flex justify-between">
        <h1 className="text-md md:text-2xl font-bold mb-4">Upcoming Blood Drives</h1>
        <h1 className="text-red-500 text-md md:text-2xl hover:text-red-700 font-bold ">View All</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <Eventcard />
        <Eventcard />
        <Eventcard />
        </div>
        
      </div>
      <div className="col-span-2 bg-red-500 text-white rounded-2xl p-5">
        <h1 className="text-4xl font-bold mb-10">Am I Eligible?</h1>
        <div className="space-y-3">
        <p className="flex items-center gap-2"><CircleCheckFill /> Age between 18-65 years</p>
        <p className="flex items-center gap-2"><CircleCheckFill />Weight at least 50 kg</p>
        <p className="flex items-center gap-2"><CircleCheckFill />Hemoglobin level above 12.5 g/dL</p>
        <p className="flex items-center gap-2"><CircleCheckFill />Good health and no major illness</p>
        </div>
      </div>
    </div>
  )
}

export default Upcommingevents
