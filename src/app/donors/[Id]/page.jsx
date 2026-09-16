
import IndividualUserInfo from '@/components/IndividualUserInfo';
import { getUserById } from '@/lib/actions';
import React from 'react'

const page = async({params}) => {
    const {Id} = await params;
    const userInfo = await getUserById(Id);
  return (
    <div>
        
        <IndividualUserInfo userInfo={userInfo} />
        </div>
  )
}

export default page