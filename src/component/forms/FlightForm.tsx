import React, { useEffect, useState } from 'react'
import { getFlight } from '@/services/flightService' 
import Link from 'next/link' 

const FlightForms = () => {

  const [ flight, setFlight ] = useState<any>([]);

  useEffect(() => {
    const searchFlight = async () => {
      try {
        const flight = await getFlight();
        setFlight(flight);
      } catch (error) {
        console.error("Error fetching flight data:", error); 
      }
    }
    searchFlight();
  }, [])   

  console.log(flight?.data);



  return (
    <div>
      <form action="" className='for'>
        <div className='mt-5'>
          <h1>From</h1>
          <div className='forminput flex justify-between relative items-center overflow-hidden'>
            <input
              type="text"
              className=''
              placeholder='Depature city or airport'
            />
          </div>
        </div>


        <div className='mt-5'>
          <h1>To</h1>
          <div className='forminput flex justify-between relative items-center overflow-hidden'>
            <input
              type="text"
              className=''
              placeholder='Arrival city or airport'
            />
          </div>
        </div>


        <div className='mt-5'>
          <h1>Depature Date</h1>
          <div className='forminput flex justify-between relative items-center overflow-hidden'>
            <input
              type="text"
              className=''
              placeholder='📆  Pick a date'
            />
          </div>
        </div>


        <div className='mt-5'>
          <h1>Passengers</h1>
          <div className='forminput flex justify-between relative items-center overflow-hidden'>
            <input
              type="text"
              className='text-black'
              placeholder='Choose Passengers'
            />
          </div>
        </div>
      </form>

      <button className='bg-[#8b5cf6] btn2'>
        <Link href={`/flight/${flight?.data}`}>    
         Search Flight
        </Link>
      </button>
    </div>
  )
}

export default FlightForms
