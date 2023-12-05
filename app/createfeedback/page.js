"use client"
import CreateFeedback from '@/components/createFeedback/CreateFeedback'
import GoBackButton from '@/shared-components/GoBackButton'
import NavbarShared from '@/shared-components/Navbar'
import React from 'react'

const feedbackpage = () => {
  return (
    <>
    <NavbarShared/>
    <GoBackButton/>
    <CreateFeedback/>
    </>
  )
}

export default feedbackpage