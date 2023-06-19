'use client'

import { useRouter } from "next/navigation"
import { useEffect } from "react"

import { BiArrowBack } from "react-icons/bi" 
import { GiBreakingChain } from "react-icons/gi"

export default function GlobalError({ error }) {

  useEffect(() => {
    console.log(error)
  }, [error])

  const router = useRouter()

  return (
      <body>
        <div
         className="
          w-[90%]
          h-screen
          mt-[-80px]
          mx-auto
          flex
          flex-col
          items-center
          justify-center
          text-center
         "
        >
          <i className="ml-[-30px]"><GiBreakingChain className="h-28 w-28" /></i>
          <h1 className="
           text-4xl
           font-semibold

          ">Location cannot be found</h1>
          <h2 className="text-xl font-medium">You might have entered a wrong location</h2>
          <h2 className="text-xl font-medium text-[17px] mt-6">Refresh the page to try again</h2>
        </div>
      </body>
  )
}