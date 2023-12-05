"use client"
import CustomerProfile from '@/components/profilePage/CustomerProfile';
import EmployeeProfile from '@/components/profilePage/EmployeeProfile';
import NavbarShared from '@/shared-components/Navbar';
import Spinner from '@/shared-components/Spinner/Spinner';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const customerpage = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [localStorageId, setLocalStorageId] = useState("")
    const router = useRouter()

    useEffect(() => {
      setLocalStorageId(localStorage.getItem("id"))
    }, [])
    
  return (
    <>
      <Spinner isLoading={isLoading} />
      <NavbarShared />
      <div className="flex">
        <CustomerProfile custId={localStorageId} />
        <div className="flex flex-col w-[20%] justify-evenly dark:bg-gray-800 m-5 rounded">
          <button
            className="text-white m-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
            onClick={(e) => {
              setIsLoading((prev) => true);
              router.push(`/customerallinsurancetype`);
            }}
          >
            Buy Insurance
          </button>
          <button
            className="text-white m-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
            onClick={(e) => {
              setIsLoading((prev) => true);
              router.push(`/allpolicy`);
            }}
          >
            My Policies
          </button>
          <button
            className="text-white m-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
            onClick={(e) => {
              setIsLoading((prev) => true);
              router.push(`/createfeedback`);
            }}
          >
            Feedback
          </button>
          <button
            className="text-white m-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
            onClick={(e) => {
              setIsLoading((prev) => true);
              router.push(`/contactus`);
            }}
          >
            Contact Us
          </button>
        </div>
      </div>
    </>
  )
}

export default customerpage