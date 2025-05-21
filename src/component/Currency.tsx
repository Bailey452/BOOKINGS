'use client'
import React from 'react'
import { getCurrency } from '@/services/currencyService'
import { getCurrent } from '@/services/currencyService'
import { BsCurrencyDollar } from "react-icons/bs";
import { useState, useEffect } from 'react';
import { FcCurrencyExchange } from "react-icons/fc";

const Currency = () => {
  const [result, setResult] = useState<any>([])
  const [loading, setLoading] = useState(false)
  const [amount, setAmount] = useState(0)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value)
  }

  useEffect(() => {
    const loadDataOnPageLoad = async () => {
      const Currency = await getCurrency()
      setResult(Currency)
    }

    loadDataOnPageLoad();
  }, [])
  console.log(result);

  useEffect(() => {
    const loadDataOnPageLoad = async () => {
      const Current = await getCurrent()
      setResult(Current)
    }

    loadDataOnPageLoad();
  }, [])
  console.log(result);


  return (
    <div className='lang'>

      <div className='langText'>
        <FcCurrencyExchange />
        <h1> Currency</h1>
      </div>

      <div className='rate exc'>
        <h1>Amount</h1>

        <div className='input flex justify-between relative items-center overflow-hidden'>
          <BsCurrencyDollar className='h-full absolute top-[5%] left-[5px]' />
          <input
            type="text"
            className='w-[95%] relative left-[25px] outline-0'
            value={amount}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className='Langtext text'>

        <div className='rate'>
          <h1>From</h1>

          <select className='input inp'>
            <option>
              {result?.data?.data?.base_currency}
            </option>
          </select>
        </div>

        <div className='rate'>
          <h1>To</h1>

          <select className='input inp'>
            {
              result?.data?.data?.exchange_rates?.map((eachCurrency: any, index: any) => (
                <option key={index}>
                  {eachCurrency.currency}, {eachCurrency.exchange_rate_buy}
                </option>
              ))
            }
          </select>
        </div>

      </div>

      <div className='exchange'>
        <p className='font-light text-gray-600'>Exchange Rate</p>

        <div className='flex justify-between mt-3'>
          <p className='font-bold'>{amount} USD =</p>
          <p><span className='span'>Thank you:</span></p>
        </div>
      </div>


    </div>
  )
}

export default Currency


// what short circuiting is and what it's used for