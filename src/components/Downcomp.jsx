
import useSWR from "swr";

import "../components/downcomp.css"

const unit = "metric"

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Downcomp = ({ search }) => {

  const forecast_url = `https://api.openweathermap.org/data/2.5/forecast?q=${search}${process.env.NEXT_PUBLIC_API_KEY}&units=${unit}`

  const { data, error } = useSWR(forecast_url, fetcher, {
    refreshInterval: 14400000,
    refreshWhenHidden: 0,
    refreshWhenOffline: 0
  });


  return (
    <>
{ data ? <div className="
    grid
    grid-cols-2
    mt-6
    gap-x-2
   ">
   <div className="
     bg-gray-500
     w-full
     flex
     flex-col
     px-12
     py-6
     rounded-md
     overflow-hidden
   ">
    <h2 className="underline">8-hour forecast</h2>
    <div id="over" className="
      flex
      flex-row
      pt-6
    ">
     {data.list.map((items, key) => {
        return(
          <div className="
           flex
           flex-col
           items-center
           text-center
           gap-y-6
           mr-6
           p-0
          " key={key}>
          <h3>{new Date(items.dt_txt).toLocaleString([], { hour: "2-digit", minute: "2-digit", hour12: false })}</h3>
          <img src={`https://openweathermap.org/img/wn/${items.weather[0].icon}.png`} alt="icon" />
          <h3>{Math.round(items.main.temp)}°</h3>
          <h3>{items.main.humidity}%</h3>
          <h3 >{Math.round(items.wind.speed*3.6)} km/h</h3>
          </div>
        )
      }).slice(0, 8)} 

    </div>

    </div>
     <div className="
     flex
     flex-col
     w-full
     bg-gray-400
     px-12
     py-6
     rounded-md
     overflow-hidden

    ">
    <h2 className="underline">Daily 8-hour forecast upto 6days</h2>
    <div id="over" className="
     flex
     flex-row
     items-start
     justify-between
     pt-6
     overflow-x-scroll
     snap-x
     scroll-smooth
    ">
      {/* <h2>{weekShort[new Date().getDay()]}</h2>
      <h2>Icon</h2>
      <h2>max temp</h2>
      <h2>min temp </h2> */}
      {data.list.map((items, id) => {
        return(
           <div className="
           flex
           flex-col
           items-center
           text-center
           gap-y-6
           mr-6
           p-0
           " key={id}>
            <h2 id="trans">{new Date(items.dt_txt).toLocaleString().slice(0, 9)}</h2> 
            <h2>{new Date(items.dt_txt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false })}</h2> 
            <img src={`https://openweathermap.org/img/wn/${items.weather[0].icon}.png`} alt="icon" />
            <h2>{Math.round(items.main.temp_max)}°</h2>
            <h2 className="pb-6">{Math.round(items.main.temp_min)}°</h2>
           </div>
        )
      })}
    </div>
  </div>

</div> : <h2>Loading.....</h2>}
</>
  )
}

export default Downcomp