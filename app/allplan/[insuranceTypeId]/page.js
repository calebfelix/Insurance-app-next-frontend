"use client"
import AllPlan from '@/components/allPlan/AllPlan'
import { useParams } from 'next/navigation'
import React from 'react'

const allplanspage = () => {
    const {insuranceTypeId} = useParams()
  return (
    <AllPlan insuranceTypeId={insuranceTypeId}/>
  )
}

export default allplanspage