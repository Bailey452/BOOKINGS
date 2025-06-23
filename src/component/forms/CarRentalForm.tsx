import React from 'react'

const HotelForms = () => {
  return (
    <div>
      <form action="" className='for'>
        <div className='mt-5'>
          <h1>Pickup Location</h1>
          <div className='forminput flex justify-between relative items-center overflow-hidden'>
            <input
              type="text"
              className=''
              placeholder='City, Airport, Station, etc'
            />
          </div>
        </div>


        <div className='mt-5'>
          <h1>Pickup Date</h1>
          <div className='forminput flex justify-between relative items-center overflow-hidden'>
            <input
              type="text"
              className=''
              placeholder='📆  Pick a date'
            />
          </div>
        </div>


        <div className='mt-5'>
          <h1>Return Date</h1>
          <div className='forminput flex justify-between relative items-center overflow-hidden'>
            <input
              type="text"
              className=''
              placeholder='📆  Pick a date'
            />
          </div>
        </div>


        <div className='mt-5'>
          <h1>Car Type</h1>
          <div className='forminput flex justify-between relative items-center overflow-hidden'>
            <input
              type="text"
              className='text-black'
              placeholder='Choose Car Type'
            />
          </div>
        </div>
      </form>

      <button className='bg-[#f97316] btn2'>
        Search Cars
      </button>
    </div>
  )
}

export default HotelForms
