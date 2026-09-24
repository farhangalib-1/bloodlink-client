"use client";
import {AlertDialog, Button} from "@heroui/react";
import Image from 'next/image'
import React from 'react'
import { GoDotFill } from "react-icons/go";
import { FaUserAlt } from "react-icons/fa";
import { MdOutlineAttachEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaDroplet } from "react-icons/fa6";
import { FaTransgender } from "react-icons/fa";
import { MdCake } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdLocationCity } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { FaPaperPlane } from "react-icons/fa";
import avater from "@/assets/images/avatar.jpg"
const IndividualUserInfo = ({ userInfo }) => {
  return (
    <div>
     <div >
        <div className="p-4 m-7 border-2 border-gray-50 rounded-2xl shadow-lg shadow-gray-50 grid md:grid-cols-3 grid-cols-1  gap-5 ">
            <div className="flex flex-col items-center gap-2">
            <Image src={userInfo.image || avater} alt={userInfo.name} width={200} height={200}  priority quality={75} sizes="200px" className="rounded-2xl" />
            <p className="text-green-600 font-semibold text-xs flex items-center"> <GoDotFill/> Availabe to Donate</p>
            </div>
            <div className="space-y-1">
                <h1 className='font-bold text-lg md:mb-6 flex items-center gap-2.5 '> < FaRegUser/>  Personal Info</h1>
                <h1 className="text-sm flex items-center gap-1.5 text-gray-500"> <FaUserAlt /> Full Name: {userInfo.name}</h1>
                <p className="text-gray-500 text-sm flex items-center gap-1.5"> <MdOutlineAttachEmail/> Email: {userInfo.email}</p>
                <p className="text-gray-500 text-sm flex items-center gap-1.5"> <FaPhoneAlt /> Mobile Number: {userInfo.mobileNumber}</p>
                <p className = "text-gray-500 text-sm flex items-center gap-1.5">
                    <FaDroplet/> Blood Group: {userInfo.bloodGroup}
                </p>
                <p className = "text-gray-500 text-sm flex items-center gap-1.5" > <FaTransgender/> Gender: {userInfo.gender}</p>
                <p className = "text-gray-500 text-sm flex items-center gap-1.5" > <MdCake/> Age: {userInfo.age}</p>

            </div>
            <div className="space-y-1">
                <h1 className='font-bold text-lg md:mb-6 flex items-center gap-2.5 '> <FaMapLocationDot />  Location</h1>
                <h1 className="text-sm flex items-center gap-1.5 text-gray-500"> <MdLocationCity  /> Division: {userInfo.division}</h1>
                <p className="text-gray-500 text-sm flex items-center gap-1.5"> <IoLocation/> District: {userInfo.district}</p>
                <p className="text-gray-500 text-sm flex items-center gap-1.5"> <IoLocation /> Upazila: {userInfo.upazila}</p>
                <div className="mt-5">
                    <AlertDialog>
      <Button variant="danger"> <FaPaperPlane /> Request Blood Donation</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>❤️ Need Blood?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                Want to request a blood donation from <strong> {userInfo.name} </strong>? Please contact the donor directly by <strong> {userInfo.mobileNumber} </strong> or <strong>{userInfo.email} </strong> <br /><br /><br />
                <strong> Together, we can save a life </strong>.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="danger">
                Okey
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
                </div>

            </div>
           
        </div>
     </div>
    </div>
  )
}

export default IndividualUserInfo