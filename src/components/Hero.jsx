import { Button, Chip } from '@heroui/react'
import {HeartPulse} from '@gravity-ui/icons';
import {Droplet} from '@gravity-ui/icons';
import {Persons} from '@gravity-ui/icons';
import heroImage from "@/assets/images/Hero-bg.png";
import React from 'react'
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="flex justify-around items-center">
      <div>
           <Chip  color="danger" variant='soft' size="md"> <HeartPulse /> Donate. Inspire. Save</Chip> 
           <h1 className="text-6xl font-bold my-3">Donate Blood, <br /> <span className="text-red-500">Save Lives</span> </h1>
           <p className="font-semibold mb-3">Your single donation can save up to three lives. <br /> Be a hero. Donate Blood</p>
           <Button size="lg" variant="danger" className="mr-3"><Droplet/> Donate Now</Button>
           <Button size="lg" variant="ghost" className="border border-red-500 text-red-500" ><Persons/> Find Donors</Button>
      </div>
      <div>
        <Image src={heroImage} alt="Hero Image" width={800}></Image>
      </div>
    </div>

  )
}

export default Hero
