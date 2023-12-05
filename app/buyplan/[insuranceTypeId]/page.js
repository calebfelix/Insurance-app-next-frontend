"use client"
import BuyPlan from '@/components/buyPlan/BuyPlan'
import { useParams } from 'next/navigation'
import React from 'react'

const buyplanspage = () => {
    const {insuranceTypeId} = useParams()
  return (
    <BuyPlan insuranceTypeId={insuranceTypeId}/>
  )
}

export default buyplanspage