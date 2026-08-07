import { Button, Chip } from '@heroui/react'
import {HeartPulse} from '@gravity-ui/icons';
import {Droplet} from '@gravity-ui/icons';
import {Persons} from '@gravity-ui/icons';
import heroImage from "@/assets/images/Hero-bg.png";
import {Shield} from '@gravity-ui/icons';
import {Clock} from '@gravity-ui/icons';
import {CircleCheckFill} from '@gravity-ui/icons';
import React from 'react'
import Image from 'next/image';

const Hero = () => {
  return (
    <div>
    <div className="flex gap-15 md:gap-0 mx-3 flex-col md:flex-row md:justify-between items-center md:mx-20">
      <div>
           <Chip  color="danger" variant='soft' size="md"> <HeartPulse /> Donate. Inspire. Save</Chip> 
           <h1 className="text-4xl md:text-6xl font-bold my-3">Donate Blood, <br /> <span className="text-red-500">Save Lives</span> </h1>
           <p className="text-sm md:text-lg font-semibold mb-3">Your single donation can save up to three lives. <br /> Be a hero. Donate Blood</p>
           <Button size="lg" variant="danger" className="mr-3"><Droplet/> Donate Now</Button>
           <Button size="lg" variant="ghost" className="border border-red-500 text-red-500" ><Persons/> Find Donors</Button>
      </div>
      <div>
        <Image src={heroImage} alt="Hero Image" width={400}></Image>
      </div>
    </div>
    <div className="grid mx-3 gap-10 grid-cols-1 md:grid-cols-4 md:mx-20 rounded-2xl shadow-2xl py-10 my-10">
        <div className="text-center md:border-r md:border-gray-300">
            <div className="flex justify-center">
            <Shield className="text-red-500" size={100}/>
            </div>
            <h1 className='font-bold'>Safe and Secure</h1> 
            <p>100% safe donation process</p>
        </div>
        <div className="text-center border-r border-gray-300 ">
            <div className="flex justify-center">
             <Clock className="text-red-500" size={60}/>
             </div>
            <h1 className='font-bold'>Safe and Secure</h1> 
            <p>100% safe donation process</p>
        </div>
        <div className="text-center border-r border-gray-300">
            <div className="flex justify-center">
<CircleCheckFill className="text-red-500" size={60}/>
            </div>
            
            <h1 className='font-bold'>Tested and Verified</h1> 
            <p>All blood is tested for safety</p>
        </div>
        <div className="text-center">
            <div className="flex justify-center">
                <Persons className="text-red-500" size={60}/>
            </div>
            
            <h1 className='font-bold'>Help Anyone</h1> 
            <p>Your blood can help anyone in need.</p>
        </div>
    </div>
    </div>

  )
}

export default Hero
