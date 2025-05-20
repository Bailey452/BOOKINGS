'use client'
import React from 'react'
import { getCurrency } from '@/services/currencyService'
import { IoLanguage } from "react-icons/io5";
import { useState, useEffect } from 'react';

const Currency = () => {
  const [result, setResult] = useState<any>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const loadDataOnPageLoad = async () => {
      const Currency = await getCurrency()
      setResult(Currency)
    }

    loadDataOnPageLoad();
  }, [])
  console.log(result);


  return (
    <div className='lang'>

      <div>
        <IoLanguage />
        <h1> Currency</h1>
      </div>

      <div>
        <h1>Choose Currency</h1>

        <h1>{result?.data?.data?.base_currency}</h1>

        <select>
          {
            result?.data?.data?.exchange_rates?.map((eachCurrency: any) => (
              <option value="text">
                {eachCurrency.currency}, {eachCurrency.exchange_rate_buy}
              </option>
            ))
          }
        </select>


      </div>


    </div>
  )
}

export default Currency


// what short circuiting is and what it's used for