"use client"

import Maincomp from "@/components/Maincomp"
import Search from "@/components/Search"
import { Suspense, useState } from "react"
import useSWR from "swr";
import Loading from "./loading";


const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Home() {

  const [input, setInput] = useState("")

  const [search, setSearch] = useState("")

  const unit = "metric"
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}${process.env.NEXT_PUBLIC_API_KEY}&units=${unit}`

  const { data, error } = useSWR(url, fetcher, {
    refreshInterval: 14400000,
    refreshWhenHidden: 0,
    refreshWhenOffline: 0
  });



  return (

    <div className="
     flex
     flex-col
     w-full
   ">
    <div className="
     flex
     flex-row
     items-center
     justify-center
    ">
    <Search  
      search={search}
      setSearch={setSearch}
      input={input}
      setInput={setInput}
      data={data}
    />
   </div>
   <Suspense fallback={<Loading />}>
      <div className="
       flex
       flex-col
       mt-6
       items-evenly
       justify-center
      ">
     {search.length === 0 ? <div className="flex bg-gray-900 items-center justify-center"><h1 className="text-white text-center">Enter location to search</h1></div>  : 
      <Maincomp
       data={data}
       search={search}
       setSearch={setSearch}
       input={input}
       setInput={setInput}
       unit={unit}
      />}
    </div>
     </Suspense>
    </div>

  )
}
