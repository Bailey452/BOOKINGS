import React from 'react'

const HotelForms = () => {
  return (
    <div>
      <form action="" className='for'>
        <div className='mt-5'>
          <h1>Pickup Location</h1>
          <div className='forinput flex justify-between relative items-center overflow-hidden w-40'>
            <input
              type="text"
              className=''
              placeholder='Enter Street Address or Airport'
            />
          </div>
        </div>


        <div className='mt-5'>
          <h1>Destination</h1>
          <div className='forinput flex justify-between relative items-center overflow-hidden'>
            <input
              type="text"
              className=''
              placeholder='Where To?'
            />
          </div>
        </div>


        <div className='mt-5'>
          <h1>Date & Time</h1>
          <div className='forinput flex justify-between relative items-center overflow-hidden w-16'>
            <input
              type="text"
              className='text-black'
              placeholder='mm/dd/yy --:-- --   📆'
            />
          </div>
        </div>
      </form>

      <button className='bg-[#f59e08] btn2'>
        Search Cars
      </button>
    </div>
  )
}

export default HotelForms
