import Downcomp from "./Downcomp";

const Maincomp = ({ data, search }) => {

  const unit = "metric"
  const forecast_url = `https://api.openweathermap.org/data/2.5/forecast?q=${search}${process.env.NEXT_PUBLIC_API_KEY}&units=${unit}`

  return (

    <>
     
     {data ? <>
          <div className='
           bg-gray-900
           text-white 
           w-full
           p-12
           h-full
          '>
           <div className='m-auto'>
           <h4>{data.name}, {data.sys.country}</h4>

            <div className='
             flex
             flex-row
             items-center
             justify-start
             mt-6
             divide-x-4
             divide-dotted
             w-min
            '>
            <div className="
              flex
              flex-col
              items-start
              justify-start
              gap-y-1
             ">
             <h2 className='text-[50px]'>{Math.round(data.main.temp)}°</h2>
             <h2>Cloudy</h2>
            </div>
             <div className='
              grid
              grid-rows-2
              place-items-center
              place-content-center
              ml-32
              pl-3
              pt-1
              w-full
            '>
               <h4 className='text-lg'>{Math.round(data.main.temp_max)}°</h4>
               <h4 className='text-lg'>{Math.round(data.main.temp_min)}°</h4>
              </div>
              <div className='
               flex
               flex-row
               items-center
               justify-end
               m-auto
               w-max
              '>
              </div>

              </div>

              <div className='
              flex
              flex-row
              m-auto
              mr-0
              h-12
              mt-[-57px]
              items-center
              justify-center
              w-max
              bg-gray-500
              rounded-md
              p-3
              divide-x
              '>
                <h2 className='pr-3'>Wind speed {Math.round(data.wind.speed*3.6)} km/h</h2>
                <h2 className='pl-3'>Visibility {data.visibility} m</h2>
              </div>
              <div className='
              flex
              flex-row
              items-center
              justify-between
              w-full
              h-[60px]
              m-auto
              mt-16
            '>
                <div className='
              flex
              flex-row
              items-center
              justify-center
              bg-gray-800
              h-full
              w-full
              rounded-s-lg  
            '>
                  <h3>Feels like {Math.round(data.main.feels_like)}°</h3>
                </div>
                <div className='
              flex
              flex-row
              items-center
              justify-center
              bg-gray-700
              h-full
              w-full 
            '>
                  <h3>Humidity {data.main.humidity}%</h3>
                </div>
                <div className='
              flex
              flex-row
              items-center
              justify-center
              bg-gray-600
              h-full
              w-full
              rounded-e-lg
            '>
                  <h3>Pressure {data.main.pressure*100} Pa</h3>
                </div>

              </div>
              </div>
             </div>

             <Downcomp
              search={search}
             />

        </> : <h2>Loading.....</h2>
        
        }
    </>
  )
}

export default Maincomp