import React from 'react'

const HotelForms = () => {
  return (
    <div>
      <form action="" className='for'>
        <div className='mt-5'>
          <h1>Destination</h1>
          <div className='forminput flex justify-between relative items-center overflow-hidden'>
            <input
              type="text"
              className=''
              placeholder='Where are You going?'
            />
          </div>
        </div>


        <div className='mt-5'>
          <h1>Check-in Date</h1>
          <div className='forminput flex justify-between relative items-center overflow-hidden'>
            <input
              type="text"
              className=''
              placeholder='📆 Pick a date'
            />
          </div>
        </div>


        <div className='mt-5'>
          <h1>Check-out Date</h1>
          <div className='forminput flex justify-between relative items-center overflow-hidden'>
            <input
              type="text"
              className=''
              placeholder='📆  Pick a date'
            />
          </div>
        </div>


        <div className='mt-5'>
          <h1>Guests</h1>
          <div className='forminput flex justify-between relative items-center overflow-hidden'>
            <input
              type="text"
              className='text-black'
              placeholder='Choose number of guests'
            />
          </div>
        </div>
      </form>

      <button className='bg-[#0da2e0] btn2'>
        Search Hotels
      </button>
    </div>
  )
}

export default HotelForms
