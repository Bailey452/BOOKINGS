'use client'
import React, { useState } from 'react';
import HotelForms from './forms/HotelForms'
import FlightForm from './forms/FlightForm'
import CarRentalForm from './forms/CarRentalForm'
import TaxiForm from './forms/TaxiForm'
import { CurrentTabProp } from '@/type';
import { LuHotel } from "react-icons/lu";
import { PiAirplaneTakeoffLight } from "react-icons/pi";
import { PiCarProfile } from "react-icons/pi";
import { PiTaxiThin } from "react-icons/pi";

const JourneyPlanner = () => {
    // state to keep track of the current form
    const [activeForm, setActiveForm] = useState('hotel')

    // function to handle form change
    const handleFormChange = (currentTab: CurrentTabProp) => {
        setActiveForm(currentTab)
    }
    return (
        <div className='Form'>
            <div className="formBtn">
                <button onClick={() => handleFormChange('hotel')}
                    className={`${activeForm === 'hotel' && 'bg-[#0da2e0] text-white'} hotel `}>
                    <LuHotel />Hotels
                </button>

                <button onClick={() => handleFormChange('flight')}
                    className={`${activeForm === 'flight' && 'bg-[#8b5cf6] text-white'} hotel `}>
                    <PiAirplaneTakeoffLight />Flight
                </button>

                <button onClick={() => handleFormChange('carRental')}
                    className={`${activeForm === 'carRental' && 'bg-[#f97316] text-white'} hotel `}>
                    <PiCarProfile />Car Rental
                </button>

                <button onClick={() => handleFormChange('taxi')}
                    className={`${activeForm === 'taxi' && 'bg-[#f59e08] text-white'} hotel `}>
                    <PiTaxiThin />Taxis
                </button>
            </div>

            <div className='form'>
                {activeForm === 'hotel' && <HotelForms  />}
                {activeForm === 'flight' && <FlightForm />}
                {activeForm === 'carRental' && <CarRentalForm />}
                {activeForm === 'taxi' && <TaxiForm />}
            </div>
        </div>
    )
}

export default JourneyPlanner
